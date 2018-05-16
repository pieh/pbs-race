const React = require('react')
import styled from 'styled-components'
import { Overlay, OverlayHeader, OverlayTitle, OverlayFilter, OverlayBody }  from '../components/overlay'
const queryString = require('query-string');
import kebabCase from 'lodash/kebabCase'
import Link, { navigateTo } from 'gatsby-link';


export const interviewsQuery = graphql`
  query faqQuery($id: String) {
    nodeFaq(id: { eq: $id }) {
	  id
	  field_question_summary {
	    processed
	  }
	  field_expert_1 {
	    processed
	  }
	  field_expert_1_answer {
	    processed
	  }
	  field_expert_2 {
	    processed
	  }
	  field_expert_3_name {
	    processed
	  }
	  field_expert_4_name {
	    processed
	  }
	  field_expert_4_answer {
	    processed
	  }
    }
  }
`