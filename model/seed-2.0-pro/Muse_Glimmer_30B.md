# ByteDance Seed 2.0 Pro — findings by Muse Glimmer 30B

- Source: ByteDance/Seed-2.0-pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's frontier multimodal reasoning model with 256K context and strong math/visual-reasoning capabilities.
- **Provider / access:** ByteDance Volcano Engine `deepinfra/ByteDance/Seed-2.0-pro`; OpenAI compatible.
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff not published.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (no Zen Free ID)
- **Context window:** 256K / 65K out
- **Modalities:** Text, image, video in; text out; reasoning yes
- **Pricing (as of 2026-09-25):** ~$0.50 / 1M input, $3.00 / 1M output per llm-stats; tokenmix reports $0.47 / $2.37. Paid.
- **Architecture:** Proprietary large-scale model; exact params undisclosed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **88.9** (tokenmix.ai review, 2026-04-22) [tokenmix.ai/blog/doubao-seed-2-0-pro-review-2026]
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- AIME 2025: **98.3** (tokenmix.ai; digitalapplied.com) [tokenmix.ai/blog/doubao-seed-2-0-pro-review-2026]
- Codeforces rating: **3020** (tokenmix.ai) [tokenmix.ai/blog/doubao-seed-2-0-pro-review-2026]

Coding:
- SWE-bench Verified: **76.5%** (airank.dev; Benchgen) [airank.dev/models/seed-2.0-pro]
- LiveCodeBench: **87.8** (digitalapplied.com) [digitalapplied.com/blog/bytedance-seed-2-doubao-ai-model-benchmarks-guide]
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE: no verified public score found

Long context:
- Context window 256K; no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** No Terminal-Bench/Tau3 public scores; agentic strength inferred from SWE-bench.
- **Reasoning: 90/100.** GPQA Diamond 88.9 and AIME 98.3 indicate frontier reasoning; HLE/LCR missing caps.
- **Context window: 80/100.** 256K tier per methodology; <500K.
- **Multimodal: 80/100.** Text+image+video in; text out.
- **Coding: 85/100.** SWE-bench Verified 76.5% and LiveCodeBench 87.8 support strong coding; DeepSWE/SciCode missing.
- **Cost efficiency: 75/100.** $0.50/$3.00 pricing is mid-range paid.
- **Overall Score: 79/100.** Mean of 60+90+80+80+85 = 79. Best-fit for multimodal reasoning/coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25 UTC
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
