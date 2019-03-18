import gql from 'graphql-tag'

export const fullMinicartQuery = gql`
  query {
    minicart @client {
      items {
        upToDate
        id
        name
        imageUrl
        detailUrl
        skuName
        quantity
        sellingPrice
        listPrice
        seller
        index
        parentItemIndex
        parentAssemblyBinding
        options {
          seller
          assemblyId
          quantity
          id
        }
        assemblyOptions {
          parentPrice
          added {
            normalizedQuantity
            choiceType
            extraQuantity
            item {
              name
              sellingPrice
              quantity
            }
          }
          removed {
            removedQuantity
            initialQuantity
            name
          }
        }
      }
      orderForm {
        cacheId
        orderFormId
        value
        totalizers {
          id
          name
          value
        }
        shippingData {
          address {
            id
            neighborhood
            complement
            number
            street
            postalCode
            city
            reference
            addressName
            addressType
          }
          availableAddresses {
            id
            neighborhood
            complement
            number
            street
            postalCode
            city
            reference
            addressName
            addressType
          }
        }
        clientProfileData {
          email
          firstName
        }
        storePreferencesData {
          countryCode
          currencyCode
          timeZone
        }
        itemMetadata {
          items {
            id
            name
            skuName
            productId
            refId
            ean
            imageUrl
            detailUrl
            assemblyOptions {
              id
              name
              required
              composition {
                minQuantity
                maxQuantity
                items {
                  maxQuantity
                  initialQuantity
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`

export const minicartOrderFormQuery = gql`
  query orderForm {
    minicart @client {
      orderForm {
        cacheId
        orderFormId
        value
        totalizers {
          id
          name
          value
        }
        shippingData {
          address {
            id
            neighborhood
            complement
            number
            street
            postalCode
            city
            reference
            addressName
            addressType
          }
          availableAddresses {
            id
            neighborhood
            complement
            number
            street
            postalCode
            city
            reference
            addressName
            addressType
          }
        }
        clientProfileData {
          email
          firstName
        }
        storePreferencesData {
          countryCode
          currencyCode
          timeZone
        }
        itemMetadata {
          items {
            id
            name
            skuName
            productId
            refId
            ean
            imageUrl
            detailUrl
            assemblyOptions {
              id
              name
              required
              composition {
                minQuantity
                maxQuantity
                items {
                  maxQuantity
                  initialQuantity
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`
