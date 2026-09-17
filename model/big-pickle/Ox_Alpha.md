# Big Pickle — findings by Ox_Alpha

- Source: OpenCode Zen (`big-pickle`, stealth/undisclosed vendor)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (no "Free"-tier wording in the ID; currently $0 on Zen)
- **Short description:** A stealth, in-house-curated coding-agent model served on OpenCode Zen under a codename. The vendor has not disclosed the underlying model; community consensus (Grokipedia, community skills) identifies it as Zhipu AI's GLM-4.6-class model. Top use case: zero-cost everyday coding-agent work.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`, Chat Completions API at `https://opencode.ai/zen/v1/chat/completions` (AI SDK: `@ai-sdk/openai-compatible`). Verified live in the Zen catalog on 2026-09-17 (`https://opencode.ai/zen/v1/models`).
- **Release / knowledge:** release_date 2025-10-17 per models.dev TOML; knowledge cutoff listed as 2025-01. The stealth listing can be swapped without notice — re-verify before relying on behavior.
- **IDs:** `opencode/big-pickle` (Free/paid-$0 ID exists on Zen — it is the only ID).
- **Context window:** 200,000 total (160,000 input / 32,000 output) — verified from `models.dev` provider TOML (`providers/opencode/models/big-pickle.toml`).
- **Modalities:** text in / text out; reasoning yes (interleaved via `reasoning_content` field); tool calls yes; structured output yes; no image/audio/PDF input.
- **Pricing (as of 2026-09-17):** $0 input / $0 output / $0 cached read on OpenCode Zen (openly listed as "Free" in the Zen pricing table). Standard free-tier caveat: prompts/outputs may be used to improve the model; do not send confidential code. No public paid SKU under this ID.
- **Architecture:** not disclosed (`open_weights = false`). Community consensus proxy: GLM-4.6 — 355B-total/32B-active MoE transformer, GQA + RoPE, ~200K context. Treat as unconfirmed.

### Raw benchmarks found

> Big Pickle itself has **no verified public first-party benchmark scores** (no BenchmarkList/BenchLM/AA page exists for the ID). All numbers below are proxies from community identification of the underlying model (GLM-4.6) and are marked provisional.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for `big-pickle`; GLM-4.6 proxy ~49.4% (provisional, community trackers) → mid-tier agentic, not frontier.
- Tau3-Banking / Tau2-Bench: no verified public score found for `big-pickle` (GLM-4.6 proxy ~10.5% Tau3, provisional).
- GDPval-AA: no verified public score found for `big-pickle` (GLM-4.6 proxy ~934, provisional).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for the `big-pickle` ID itself.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for `big-pickle` (GLM-4.6 proxies circulate at ~0.63–0.81 depending on harness — provisional, harness-dependent).
- HLE: 24.8 without tools / 42.8 with tools (Grokipedia, GLM-4.6 proxy — provisional).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA page for the ID).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- MMLU-Pro: 84.3 (Grokipedia, GLM-4.6 proxy — provisional).

Coding:

- SWE-bench Verified: 73.8% (Grokipedia, GLM-4.6 proxy; same page's comparison table shows ~68% — treat 68–74% as the proxy band).
- SWE-bench Multilingual: 66.7% (Grokipedia, GLM-4.6 proxy).
- LiveCodeBench: 82.8 (v6, Grokipedia proxy).
- SciCode / AA-SciCode: no verified public score found (community tracker proxy ~38.4% — provisional).
- Vibe Code Bench: no verified public score found (community tracker proxy ~3.1% — provisional; notably weak).
- DeepSWE / Coding Index / other: no verified public score found.

Long context:

- No MRCR/RULER/GraphWalks retrieval reported for `big-pickle`. Native window 200K (models.dev); community proxies for GLM-4.6 claim strong 128K→200K long-context handling but no public retrieval score.

### Normalized scores (1–100)

- **Tool use: 55/100.** Proxy GLM-4.6 agentic numbers (TB ~49%, Tau3 ~10%, GDPval ~934) sit squarely in the methodology's "mid" band (50–70, low end); no first-party `big-pickle` evals exist, and the unknown swap risk caps confidence.
- **Reasoning: 60/100.** HLE 24.8/42.8 (with tools) and MMLU-Pro 84.3 indicate solid mid-frontier reasoning; missing GPQA/LCR/Index coverage and mid-band proxies cap it below frontier models.
- **Context window: 70/100.** 200K total per the methodology tier map (200K = 70); max output 32K is a caveat, and no public ≥512K retrieval evidence blocks a higher score.
- **Multimodal: 15/100.** Text-only in and out (models.dev modalities: `["text"] / ["text"]`).
- **Coding: 70/100.** SWE-bench Verified 68–74% (proxy), LiveCodeBench 82.8 are strong-for-price but below the 90+ frontier band (DeepSWE 74%+, SciCode 55%+); the unverified stealth status and weak Vibe proxy (~3%) cap the score.
- **Cost efficiency: 100/100.** $0 in/out/cache on the evaluated Zen tier; flagged as time-limited with training-data usage caveat.
- **Overall Score: 62/100.** (55 + 60 + 70 + 15 + 70 + 100) / 6 = 61.7 → **62**. Best fit: zero-cost daily driver for coding-agent chores; escalate to a frontier model after repeated failures or for 1M-context jobs.

---

## Signature

- Provided by: **Ox_Alpha** — 2026-09-17
- Method: public internet research (models.dev provider TOML, OpenCode Zen docs + live model catalog endpoint, Grokipedia community article); scores are normalized 1–100 interpretations, not official vendor scores. Search engines (Bing/DDG/Mojeek) were bot-blocked during research; primary/aggregator sources were fetched directly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.