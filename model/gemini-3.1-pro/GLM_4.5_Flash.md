# Gemini 3.1 Pro — GLM 4.5 Flash Research

## Model Overview

Gemini 3.1 Pro is Google's advanced AI model designed to refine the performance and reliability of the Gemini 3 Pro series. It provides better thinking capabilities, improved token efficiency, and a more grounded, factually consistent experience. The model is optimized for software engineering behavior and usability, as well as agentic workflows requiring precise tool usage and reliable multi-step execution across real-world domains.

## Key Specifications

- **Model ID**: gemini-3.1-pro-preview
- **Input/Output Types**: Text, Image, Video, Audio, and PDF (input); Text (output)
- **Context Window**: 1,048,576 tokens (input)
- **Output Limit**: 65,536 tokens
- **Latest Update**: February 2026

## Capabilities

### Supported Features
- **Audio generation**: Not supported
- **Caching**: Supported
- **Code execution**: Supported
- **File search**: Supported (AI Studio only)
- **Function calling**: Supported
- **Grounding with Google Maps**: Supported
- **Image generation**: Not supported
- **Live API**: Not supported
- **Search grounding**: Supported
- **Structured outputs**: Supported
- **Thinking**: Supported
- **URL context**: Supported

### API Options
- **Batch API**: Supported
- **Flex inference**: Supported
- **Priority inference**: Supported

## Specialized Endpoint

Gemini 3.1 Pro Preview also offers a specialized endpoint called `gemini-3.1-pro-preview-customtools` which is optimized for agentic workflows that use custom tools (like view_file or search_code) and bash commands. This endpoint prioritizes custom tools over built-in ones, though quality may fluctuate in use cases that don't benefit from such tools.

## Performance Characteristics

Based on the averaged scores from the model comparison:

- **Overall Score**: 92.5/100
- **Tool use**: 90.1/100
- **Reasoning**: 93.7/100
- **Context window**: 95.6/100
- **Multimodal**: 93.3/100
- **Coding**: 89.3/100
- **Cost efficiency**: 82.2/100

## Research Sources

1. **Official Documentation**: Google AI for Developers - Gemini 3.1 Pro Preview documentation page
   - Provides comprehensive information about model capabilities, specifications, and API options
   - Details supported features and limitations
   - Includes information about the specialized custom tools endpoint

## Strengths

- Exceptional reasoning capabilities (93.7/100)
- Large context window (1M tokens) suitable for complex tasks
- Strong multimodal understanding across various input types
- Excellent tool use capabilities for agentic workflows
- Support for advanced features like structured outputs and thinking

## Limitations

- No audio generation capabilities
- No image generation capabilities
- Live API not supported
- File search limited to AI Studio environment

## Use Cases

- Software engineering and development tasks
- Complex agentic workflows requiring precise tool usage
- Multi-step execution across real-world domains
- Applications requiring large context windows
- Tasks needing grounded, factually consistent responses

## Comparison with Previous Versions

Gemini 3.1 Pro represents an improvement over earlier versions with:
- Better thinking capabilities
- Improved token efficiency
- More grounded, factually consistent responses
- Enhanced optimization for software engineering tasks