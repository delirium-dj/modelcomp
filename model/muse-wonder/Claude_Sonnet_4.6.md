# Muse Wonder — Research Notes

**Model ID:** opencode/muse-wonder  
**Context window:** 1,048,576 (1M) total (scaffolded meta shows 128K — actual spec is 1M per Meta API)  
**Modalities:** Text, image, video, audio in; text out  
**Pricing:** $4.00/$20.00 per 1M in/out; $0.20 cached; optional web search $2.50/1K queries

## Benchmarks

- DeepSWE 1.1: 78.8% (standard API tier, close to Muse Wonder Full's 79.0%)
- SWE-Marathon: 53.1% (max effort)
- Terminal-Bench 4.0-AA: ~52.0%
- AA Intelligence Index: 52 (at max effort)
- Muse Wonder Full (subscription tier) posts marginally higher scores on the same benchmarks

## Scores

- **Tool use: 87/100.** DeepSWE 78.8%; SWE-Marathon 53.1%; six-level reasoning effort (minimal→max); built-in web search grounding; elite agentic tool use tuned for marathon-length workflows.
- **Reasoning: 87/100.** DeepSWE 78.8% beats Claude Opus 5.5 (74.2%) and GPT-6 Astra (74.1%); AA Intelligence Index 52 at max effort — frontier-class reasoning at the standard API tier.
- **Context window: 92/100.** 1M token context (1,048,576); supports long-horizon codebase and document processing.
- **Multimodal: 85/100.** Full omni: text, image, video, audio in — all four input modalities covered.
- **Coding: 87/100.** DeepSWE 78.8% #1-class for standard public API; SWE-Marathon 53.1%; strong long-horizon code execution across 1M context.
- **Cost efficiency: 60/100.** $4/$20 per 1M — premium tier pricing; Muse Wonder Full requires subscription on top; web search add-on costs extra; justified only by frontier benchmark position.
- **Overall Score: 88/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (87+87+92+85+87)/5 = 87.6 ≈ 88. Meta's standard-API frontier model: DeepSWE 78.8% leading Opus 5.5 and GPT-6 Astra, full omni inputs, 1M context — the go-to long-horizon agent at the public API tier before the subscription-only Full variant.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
