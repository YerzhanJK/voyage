const destinations = [
  {
      name: 'France',
      cities: ['Paris'],
      description: 'France is known for its cuisine, art, and culture.',
      itinerary: [
          {
              day: 1,
              activities: [
                  {
                      time: 'Morning',
                      description: 'Arrive in Paris and check into your hotel. Have breakfast at a local café, enjoying pastries and coffee.'
                  },
                  {
                      time: 'Afternoon',
                      description: 'Visit the Eiffel Tower. Take the elevator to the top for a panoramic view of Paris. Walk along the Champ de Mars and enjoy a picnic.'
                  },
                  {
                      time: 'Evening',
                      description: 'Dinner at a Seine River cruise restaurant to enjoy the city lights and landmarks.'
                  }
              ]
          },
          // Add more days if needed
      ]
  },
  {
      name: 'Italy',
      cities: ['Rome', 'Milan', 'Venice'],
      description: 'Italy is known for its rich history, art, and culture.',
      itinerary: [
          {
              day: 1,
              activities: [
                  {
                      time: 'Morning',
                      description: 'Visit the Colosseum.'
                  },
                  {
                      time: 'Afternoon',
                      description: 'Explore the Roman Forum.'
                  },
                  {
                      time: 'Evening',
                      description: 'Dine at a local restaurant.'
                  }
              ]
          },
          // Add more days if needed
      ]
  },
  {
      name: 'Japan',
      cities: ['Tokyo', 'Kyoto', 'Osaka'],
      description: 'Japan is known for its unique blend of traditional and modern culture.',
      itinerary: [
          {
              day: 1,
              activities: [
                  {
                      time: 'Morning',
                      description: 'Visit the Senso-ji Temple.'
                  },
                  {
                      time: 'Afternoon',
                      description: 'Explore Akihabara.'
                  },
                  {
                      time: 'Evening',
                      description: 'Dine at a sushi restaurant.'
                  }
              ]
          },
          // Add more days if needed
      ]
  }
];

export default destinations;
