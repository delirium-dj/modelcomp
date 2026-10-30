# Mistral Medium 3.5 — Research Notes

**Model ID:** mistralai/mistral-medium-3-5  
**Context window:** 256,000 total  
**Modalities:** Text, image in; text out  
**Architecture:** 128B dense open-weight merged model; Modified MIT  
**Pricing:** $1.50/$7.50 per 1M in/out; $0.15 cached; batch $0.75/$3.75; self-host free

## Benchmarks (from meta.json)

- SWE-bench Verified: 77.6% (Mistral) / 66.4% (Vals AI) — significant vendor vs. independent gap
- 128B dense merged model; European provider; telecom-grade instruction-following
- European data-sovereignty option via Mistral API

## Scores

- **Tool use: 73/100.** Mid-pack coding measured independently (Vals 66.4% SWE-bench); 256K context for instruction-following agents; telecom-agent focus; vendor/independent gap (77.6% vs 66.4%) reduces confidence.
- **Reasoning: 74/100.** 128B dense model; strong instruction-following and knowledge-work reasoning; merge lineage makes behaviour harder to reason about than trained-clean checkpoints.
- **Context window: 78/100.** 256K total — solid European-hosted context window for document-heavy workflows.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video understanding.
- **Coding: 72/100.** SWE-bench Verified 77.6% claimed vs 66.4% independently — using ~70% conservative average; mid-pack coding with merge-related behavioural unpredictability.
- **Cost efficiency: 72/100.** $1.50/$7.50 per 1M — reasonable for a 128B dense model; batch pricing at 50% discount; Modified MIT self-host option; not on OpenCode Zen.
- **Overall Score: 71/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (73+74+78+60+72)/5 = 71.4 ≈ 71. Mistral's European dense workhorse: 256K context and telecom-grade instruction-following from a merged open-weight model; significant vendor vs. independent benchmark gap (77.6% vs 66.4%) and merge-lineage complexity are the main caveats.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
