# GLM 4.6V Flash — Research Notes

**Model ID:** zhipuai/glm-4.6v-flash  
**Context window:** 1M tokens  
**Modalities:** Text in; text out  
**Pricing:** $5/$25 per 1M in/out

## Benchmarks

- Mid-range general text model in the GLM 4.x series
- Limited public benchmark data compared to flagship models per meta.json
- Enhanced capabilities vs GLM 4.5V

## Scores

- **Tool use: 58/100.** 1M context for large-document tool-call workflows; mid-range model; limited independent benchmark coverage published.
- **Reasoning: 58/100.** Mid-range reasoning in the GLM 4.x tier; 1M context enables long document reasoning; limited public benchmark data.
- **Context window: 92/100.** 1M token context — the headline feature; large-document analysis and long-form tasks supported.
- **Multimodal: 15/100.** Text in/out only per meta.json — the "V" in name suggests vision was intended but modality field shows text only; no confirmed image/video inputs.
- **Coding: 55/100.** Mid-range GLM 4.x coding; limited published coding benchmarks; not a coding-specialist model.
- **Cost efficiency: 22/100.** $5/$25 per 1M — expensive for a mid-range model with limited benchmark evidence; the 1M context is the only justification for this pricing tier.
- **Overall Score: 56/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (58+58+92+15+55)/5 = 55.6 ≈ 56. Zhipu AI's mid-range 1M-context model: the large context window is the standout feature; limited public benchmark data and high per-token pricing limit its appeal vs the MIT open-weight GLM-5.x line.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
