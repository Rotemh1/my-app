import {it, expect, describe} from 'vitest';
import { columnCheck, rowCheck, slantCheck, slant2Check } from '../Services/validations';

// Describe the columnCheck function
describe('columnCheck Function', () => {
    // Test case for a valid sum (sum <= maxSum)
    it('should return true for a valid sum (sum <= maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const ySize = 3;
      const maxSum = 30;
  
      const result = columnCheck(x, newMatrix, ySize, maxSum);
      expect(result).toBe(true);
    });
  
    // Test case for an invalid sum (sum > maxSum)
    it('should return false for an invalid sum (sum > maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 2;
      const ySize = 3;
      const maxSum = 10;
  
      const result = columnCheck(x, newMatrix, ySize, maxSum);
      expect(result).toBe(false);
    });
  
    // Test case for an empty matrix (should return true)
    it('should return true for an empty matrix', () => {
      const newMatrix = [];
      const x = 0;
      const ySize = 0;
      const maxSum = 10;
  
      const result = columnCheck(x, newMatrix, ySize, maxSum);
      expect(result).toBe(true);
    });
  
    // Test case for NaN values in the matrix (should handle NaN gracefully)
    it('should handle NaN values in the matrix and return true', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, NaN, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const ySize = 3;
      const maxSum = 20;
  
      const result = columnCheck(x, newMatrix, ySize, maxSum);
      expect(result).toBe(true);
    });

    it('should handle undefiend values in the matrix and return true', () => {
        const newMatrix = [
          [1, 2, 3],
          [4, undefined, 6],
          [7, 8, 9],
        ];
        const x = 1;
        const ySize = 3;
        const maxSum = 20;
    
        const result = columnCheck(x, newMatrix, ySize, maxSum);
        expect(result).toBe(true);
      });

      
    it('should handle null values in the matrix and return true', () => {
        const newMatrix = [
          [1, 2, 3],
          [4, null, 6],
          [7, 8, 9],
        ];
        const x = 1;
        const ySize = 3;
        const maxSum = 20;
    
        const result = columnCheck(x, newMatrix, ySize, maxSum);
        expect(result).toBe(true);
      });
  });

  // Describe the rowCheck function
describe('rowCheck Function', () => {
    // Test case for a valid sum (sum <= maxSum)
    it('should return true for a valid sum (sum <= maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const y = 1;
      const xSize = 3;
      const maxSum = 20;
  
      const result = rowCheck(y, newMatrix, xSize, maxSum);
      expect(result).toBe(true);
    });
  
    // Test case for an invalid sum (sum > maxSum)
    it('should return false for an invalid sum (sum > maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const y = 1;
      const xSize = 3;
      const maxSum = 10;
  
      const result = rowCheck(y, newMatrix, xSize, maxSum);
      expect(result).toBe(false);
    });
  
    // Test case for maxSum less than 0 (should throw an error)
    it('should throw an error for maxSum < 0', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const y = 1;
      const xSize = 3;
      const maxSum = -1;
  
      expect(() => {
        rowCheck(y, newMatrix, xSize, maxSum);
      }).toThrowError('maxSum must be greater then 0');
    });
  
    // Test case for NaN values in the matrix (should handle NaN gracefully)
    it('should handle NaN values in the matrix and return true', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, NaN, 6],
        [7, 8, 9],
      ];
      const y = 1;
      const xSize = 3;
      const maxSum = 20;
  
      const result = rowCheck(y, newMatrix, xSize, maxSum);
      expect(result).toBe(true);
    });

    it('should handle undefiend values in the matrix and return true', () => {
        const newMatrix = [
          [1, 2, 3],
          [4, undefined, 6],
          [7, 8, 9],
        ];
        const y = 1;
        const xSize = 3;
        const maxSum = 20;
    
        const result = rowCheck(y, newMatrix, xSize, maxSum);
        expect(result).toBe(true);
      });

      
    it('should handle null values in the matrix and return true', () => {
        const newMatrix = [
          [1, 2, 3],
          [4, null, 6],
          [7, 8, 9],
        ];
        const y = 1;
        const xSize = 3;
        const maxSum = 20;
    
        const result = rowCheck(y, newMatrix, xSize, maxSum);
        expect(result).toBe(true);
      });

  });

  // Describe the slantCheck function
describe('slantCheck Function', () => {
    // Test case for a valid sum (sum <= maxSum)
    it('should return true for a valid sum (sum <= maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const y = 1;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 20;
  
      const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(true);
    });
  
    // Test case for an invalid sum (sum > maxSum)
    it('should return false for an invalid sum (sum > maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 0;
      const y = 0;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 10;
  
      const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(false);
    });
  
    // Test case for maxSum less than 0 (should throw an error)
    it('should throw an error for maxSum < 0', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const y = 1;
      const xSize = 3;
      const ySize = 3;
      const maxSum = -1;
  
      expect(() => {
        slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
      }).toThrowError('maxSum must be greater then 0');
    });
  
    // Test case for out-of-bounds coordinates (should handle gracefully)
    it('should handle out-of-bounds coordinates gracefully', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 2;
      const y = 0;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 20;
  
      const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(true);
    });

        // Test case for NaN values in the matrix (should handle NaN gracefully)
        it('should handle NaN values in the matrix and return true', () => {
            const newMatrix = [
              [1, 2, 3],
              [4, NaN, 6],
              [7, 8, 9],
            ];
            const x = 1;
            const y = 1;
            const xSize = 3;
            const ySize = 3;
            const maxSum = 10;
        
            const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
            expect(result).toBe(true);
          });
      
          it('should handle undefiend values in the matrix and return true', () => {
              const newMatrix = [
                [1, 2, 3],
                [4, undefined, 6],
                [7, 8, 9],
              ];
              const x = 1;
              const y = 1;
              const xSize = 3;
              const ySize = 3;
              const maxSum = 10;
          
              const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
              expect(result).toBe(true);
            });
      
            
          it('should handle null values in the matrix and return true', () => {
              const newMatrix = [
                [1, 2, 3],
                [4, null, 6],
                [7, 8, 9],
              ];
              const x = 1;
              const y = 1;
              const xSize = 3;
              const ySize = 3;
              const maxSum = 10;
          
              const result = slantCheck(x, y, newMatrix, xSize, ySize, maxSum);
              expect(result).toBe(true);
            });
  });

  // Describe the slant2Check function
describe('slant2Check Function', () => {
    // Test case for a valid sum (sum <= maxSum)
    it('should return true for a valid sum (sum <= maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const y = 1;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 20;
  
      const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(true);
    });
  
    // Test case for an invalid sum (sum > maxSum)
    it('should return false for an invalid sum (sum > maxSum)', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const y = 1;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 10;
  
      const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(false);
    });
  
    // Test case for maxSum less than 0 (should throw an error)
    it('should throw an error for maxSum < 0', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 1;
      const y = 1;
      const xSize = 3;
      const ySize = 3;
      const maxSum = -1;
  
      expect(() => {
        slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
      }).toThrowError('maxSum must be greater then 0');
    });
  
    // Test case for out-of-bounds coordinates (should handle gracefully)
    it('should handle out-of-bounds coordinates gracefully', () => {
      const newMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const x = 0;
      const y = 2;
      const xSize = 3;
      const ySize = 3;
      const maxSum = 20;
  
      const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
      expect(result).toBe(true);
    });

            // Test case for NaN values in the matrix (should handle NaN gracefully)
            it('should handle NaN values in the matrix and return true', () => {
                const newMatrix = [
                  [1, 2, 3],
                  [4, NaN, 6],
                  [7, 8, 9],
                ];
                const x = 1;
                const y = 1;
                const xSize = 3;
                const ySize = 3;
                const maxSum = 10;
            
                const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
                expect(result).toBe(true);
              });
          
              it('should handle undefiend values in the matrix and return true', () => {
                  const newMatrix = [
                    [1, 2, 3],
                    [4, undefined, 6],
                    [7, 8, 9],
                  ];
                  const x = 1;
                  const y = 1;
                  const xSize = 3;
                  const ySize = 3;
                  const maxSum = 10;
              
                  const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
                  expect(result).toBe(true);
                });
          
                
              it('should handle null values in the matrix and return true', () => {
                  const newMatrix = [
                    [1, 2, 3],
                    [4, null, 6],
                    [7, 8, 9],
                  ];
                  const x = 1;
                  const y = 1;
                  const xSize = 3;
                  const ySize = 3;
                  const maxSum = 10;
              
                  const result = slant2Check(x, y, newMatrix, xSize, ySize, maxSum);
                  expect(result).toBe(true);
                });
  });