# MAI-Thinking-1 — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's deep reasoning flagship (1T total / 35B active sparse MoE) for complex multi-step problem solving and frontier software engineering at mid-weight price. Built from scratch on licensed data, no third-party distillation.
- **Provider / access:** Microsoft AI (Foundry) + OpenCode Zen `opencode/mai-thinking-1`.
- **Release / knowledge:** 2026-06-02 release (LLM Reference); knowledge cutoff not disclosed.
- **IDs:** `opencode/mai-thinking-1`
- **Context window:** Per repo meta 131,072 total (32,768 out); LLM Reference lists 256K + 64K max output. Listed-window conflict — scored on repo meta 131K with conflict noted; verify before sync.
- **Modalities:** Text in/out; deep reasoning yes; JSON/tool use yes.
- **Pricing (as of 2026-10-08):** Per repo meta $2.00 input / $10.00 out per 1M (Microsoft AI); LLM Reference lists Foundry route without tracked per-token price (unpublished). Paid only — scored on repo-meta price.
- **Architecture:** Sparse MoE ~1T total / 35B active; proprietary, weights not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (LLM Reference observed 2026-06-02)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- SWE-bench Pro: **52.8%** (LLM Reference public dataset; rank 35/49 peer bar)
- Surge blind 1,276-task side-by-side: narrowly beat Claude Sonnet 4.6, trailed Claude Opus 4.6 (Microsoft via LLM Reference)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (LLM Reference Google-Proof Q&A observed 2026-06-02)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- AIME 2025: **97.0%**; AIME 2026: **94.5%**; HMMT Feb 2026: **84.9%**; MMLU-Pro: **85.0%**; MultiChallenge: **53.0%** (rank 15/28) (all LLM Reference observed 2026-06-02/07)

Coding:

- SWE-bench Verified / SWE-Pro: **73.5% Verified (rank 48/90) / 52.8% Pro (rank 35/49)** (LLM Reference)
- LiveCodeBench: **87.7% v6** (LLM Reference; rank 12/67 peer bar)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact conflicted (131K repo vs 256K catalog).

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.0 46.0pct + SWE-Pro 52.8pct + Surge blind win over Sonnet 4.6; capped with no Tau/GDPval rows and mid peer ranks.
- **Reasoning: 84/100.** GPQA 84.2pct + AIME 97.0/94.5pct + HMMT 84.9pct + MMLU-Pro 85.0pct; capped with no HLE/LCR/CritPt/Index rows.
- **Context window: 72/100.** Repo-meta 131,072 total (128K+ tier) used for scoring with 256K-catalog conflict flagged; capped below 256K band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only — floor tier.
- **Coding: 80/100.** LCB v6 87.7pct (rank 12/67) + Verified 73.5pct + Pro 52.8pct; capped with no SciCode/Vibe/DeepSWE rows.
- **Cost efficiency: 55/100.** $2.00/$10.00 paid (repo meta; Foundry per-token unpublished) — mid-weight flagship price for 1T/35B reasoning.
- **Overall Score: 64/100.** Mean of five non-cost dims (70+84+72+15+80)/5 = 64.2 → 64; best for deep math+code reasoning where AIME/GPQA/LCB stack outweighs text-only 131K window.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (LLM Reference page, BenchLM page, repo meta; context/pricing conflict repo-vs-catalog flagged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
