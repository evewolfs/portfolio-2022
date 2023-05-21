import { request, gql } from "graphql-request";
import { RichText } from '@graphcms/rich-text-react-renderer';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection (first: 14 orderBy: orderNumber_ASC) {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            websiteLink
            orderNumber
            videoLink
            featuredImg {
              url
            }
            featuredImage {
              url
            }
            featuredVideo {
              url
            }
       
            categories {
              name
              slug
            }
            content {
              raw
            }
            process {
              raw
            }
          }
        }
      }
    }
    
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories  {
      categories(orderBy: orderCategory_ASC) { 
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}} first: 14 orderBy: orderNumber_ASC) {
        edges {
          cursor
          node {
            createdAt
            slug
            title
            excerpt
            websiteLink
            orderNumber
            videoLink
            featuredImg {
              url
            }
            featuredImage {
              url
            }
    
            categories {
              name
              slug
            }
            content {
              raw
            }
            process {
              raw
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};