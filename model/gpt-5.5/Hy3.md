# GPT-5.5 — findings by Hy3

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's base GPT-5.5 model (2026-04-24), positioned for real-world work and agents. Notable for a large hallucination-rate cut and long-text/reasoning gains. Deprecated 2026-10-14.
- **Provider / access:** OpenAI API, ChatGPT (paid tiers), Codex. Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-04-24; deprecated 2026-10-14.
- **IDs:** `openai/gpt-5.5`
- **Context window:** ~1,000,000 tokens (BenchGecko: 1.1M; 922K in / 128K out typical).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** ~$5.00 / $25.00 per 1M tokens (BenchGecko); deprecated.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch post; vs GPT-5.4 75.1%)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found for base GPT-5.5 specifically this pass
- Hallucination rate cut **−52.5%** vs prior (vendor claim)

Coding:

- No verified public SWE-bench figure found for base GPT-5.5 specifically this pass
- Long-text understanding **2×** prior; reasoning speed **3×** prior (vendor claims)

Long context:

- ~1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 82.7% is strong agentic skill.
- **Reasoning: 86/100.** Reasoning-speed 3× claim and low hallucination imply strong reasoning; no public GPQA/HLE figure found.
- **Context window: 100/100.** ~1,000,000-token context (top tier).
- **Multimodal: 85/100.** Text + image in; no verified native audio/video generation.
- **Coding: 85/100.** Coding-focused positioning with 82.7% Terminal-Bench; no public SWE-bench number found to push higher.
- **Cost efficiency: 60/100.** ~$5/$25 per 1M (premium base tier); now deprecated.
- **Overall Score: 88/100.** Mean of the five non-cost dims (86+86+100+85+85)/5 = 88.4 → 88. Best-fit: reliable high-capability base with strong agentic terminal skill and low hallucination, gated by mid multimodal and premium cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — OpenAI launch post (introducing-gpt-5-5), BenchGecko, news recap; independent of peer `model/` findings.
- Reference URLs:
  - [Introducing GPT-5.5 (OpenAI)](https://openai.com/zh-Hans-CN/index/introducing-gpt-5-5/)
  - [GPT-5.5 — BenchGecko](https://www.benchgecko.ai/model/gpt-5-5)
