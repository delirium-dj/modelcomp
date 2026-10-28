# DeepSeek V4.1 Flash 1017 — Research Notes

**Model ID:** opencode/deepseek-v4.1-flash-1017  
**Context window:** 1M total; 384K max output  
**Modalities:** Text, image in; text out  
**Architecture:** 552B/16B-active CED MoE; MIT license  
**Pricing:** $0.30/$1.20 per 1M peak; $0.15/$0.60 off-peak

## Benchmarks (October 17, 2026 checkpoint)

- DeepSWE 1.1: 77.0 (up from 74.2 in September)
- Terminal-Bench 4.0: 42.3 (up from 31.2)
- NL2Repo-Bench: 68.2 (up from 65.4)
- Apex Bench v1.1: 72.1 (up from 64.6)
- Automation-Bench v1.0.6: 60.5
- HLE (text-only): 42.6
- ProgramBench: 29.1

## Scores

- **Tool use: 86/100.** Terminal-Bench 4.0 42.3%, Automation-Bench 60.5%; strong agentic tool use with shorter output lengths vs previous checkpoint — efficiency-improved.
- **Reasoning: 85/100.** HLE text-only 42.6%, Apex Bench 72.1%; solid cross-domain reasoning for a flash-class 16B-active MoE.
- **Context window: 92/100.** 1M tokens total; 384K max output — larger max output than most competitors at this price tier.
- **Multimodal: 60/100.** Text and image in; text out; no audio or video understanding.
- **Coding: 86/100.** DeepSWE 77.0% and NL2Repo-Bench 68.2% — excellent code quality for the flash pricing tier; October checkpoint shows measurable improvement over September.
- **Cost efficiency: 90/100.** $0.15/$0.60 off-peak per 1M; $0.30/$1.20 peak; MIT license for self-hosting; outstanding value for DeepSWE 77.0% performance.
- **Overall Score: 82/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (86+85+92+60+86)/5 = 81.8 ≈ 82. DeepSeek's October-improved flash: significant benchmark gains over September with shorter/faster outputs; MIT license and off-peak pricing make it the value pick in the flash tier.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
