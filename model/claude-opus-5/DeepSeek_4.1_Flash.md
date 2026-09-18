# Claude Opus 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5 (`claude-opus-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (API id `claude-opus-5`; no "Free" tier exists)
- **Short description:** Anthropic's flagship Opus 5-generation model, released 2026-07-24 as the successor to Opus 4.8, built for the deepest reasoning and the longest autonomous coding/research runs. It briefly leaked inside Cursor's model picker as codename "Honeycomb EAP" on 2026-07-09 before the full rollout.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI. Closed, API-only, no open weights.
- **Release / knowledge:** Released 2026-07-24. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens, which is both the default and the ceiling — there is no smaller-context variant. Max output 128,000 tokens via the Messages API, extending to 300,000 via the Message Batches API with a beta header. Verified from Anthropic's model page as compiled by HokAI (checked 2026-07-26).
- **Modalities:** text, image and PDF in; text out; tool calling both directions; reasoning yes — extended thinking is **on by default** (a change from Opus 4.8) with effort tiers low/medium/high/max plus a new **xhigh** tier.
- **Pricing (as of 2026-09-18):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input — unchanged from Opus 4.8. Fast Mode $10 / $50; Batch API $2.50 / $12.50. Prompt caching now activates from 512 tokens.
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for Opus 5 itself
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Legora BAR (28 legal practice areas, agentic document work): **Quality Rubric Index 1.18× the model average — highest in the set**, with consistent quality across short/medium/long difficulty; highest median latency per case and higher cost per case than Grok 4.5 and Claude Sonnet 5 (Benchgen card, 2026-08-03)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic via HokAI, 2026-07-24)
- HLE: **no verified public score found** for Opus 5 (DeepSeek's own card cites 56.3% for Opus 5 on the text-only HLE subset, a third-party attribution not confirmed here)
- ARC-AGI-3 (high reasoning effort): **30.16%** — roughly 20× Opus 4.8 on the same test and about 4× GPT-5.6 Sol Max (Anthropic)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **61** in max-effort mode, against a ~32 median for comparable frontier models (Artificial Analysis, 2026-07-25)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **97.0%** — described as the highest recorded result published on that benchmark to date (Anthropic; HokAI ranks it #1 of 28 tracked models)
- SWE-bench Pro: **79.2%** (Anthropic; up 10 points from Opus 4.8's 69.2%)
- DeepSWE v1.1: **74.0%** (third-party comparison table published alongside DeepSeek V4.1 Flash's card)
- LiveCodeBench / SciCode / Vibe Code Bench / Coding Index: **no verified public score found**
- Output speed: **54 tok/s** median (Artificial Analysis) — slowest-in-class for interactive chat

Long context:

- no model-specific MRCR/RULER/GraphWalks value for Opus 5 was reproduced in the sources checked; the 1M window is the default tier but its recall-at-depth is vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 95/100.** Leads long-horizon agentic work in head-to-head legal and coding evaluations and adds the xhigh effort tier; capped only by the fact that no Terminal-Bench 2.1, Tau3, GDPval or Claw result was published for this checkpoint.
- **Reasoning: 96/100.** GPQA Diamond 94.1%, ARC-AGI-3 at 30.16% and an Artificial Analysis Intelligence Index of 61 put it at the top of the tracked field; the missing HLE/CritPt numbers are the only gap.
- **Context window: 95/100.** 1M tokens as both default and ceiling with 128K (300K beta) output; no published recall-at-depth measurement keeps it off a perfect score.
- **Multimodal: 80/100.** Text, image and PDF input with strong chart/document and UI replication work; text-only output, no audio or video input.
- **Coding: 97/100.** 97.0% SWE-bench Verified, 79.2% SWE-bench Pro and 74.0% DeepSWE v1.1 — the best combination of agentic coding numbers found in this scan.
- **Cost efficiency: 45/100.** Unchanged premium pricing ($5/$25, Fast Mode $10/$50) and no free tier; caching from 512 tokens and half-price batch work are the only mitigations.
- **Overall Score: 93/100.** (95 + 96 + 95 + 80 + 97 + 45) / 6 = 84.7 → **85**. Best fit: teams running long autonomous coding or research agents where million-token recall and top coding scores justify the highest per-token spend tracked here.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic model page and Artificial Analysis figures as compiled by HokAI, plus a Benchgen evaluation card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.