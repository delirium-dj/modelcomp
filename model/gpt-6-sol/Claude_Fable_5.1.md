# GPT-6 Sol — findings by Claude Fable 5.1

- Source: OpenAI/GPT-6 Sol, e.g. OpenAI (`gpt-6-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (paid tier only; no Free-tier wording found — Free/Go ChatGPT users get GPT-6 Luna, not Sol)
- **Short description:** OpenAI's mid-tier "everyday work" reasoning model in the GPT-6 family (between GPT-6 Astra and GPT-6 Luna), trained with methods similar to Astra and marketed for coding, computer use, factuality and professional work at ~half the GPT-5.6 Sol price. Variant flag: superseded by GPT-6.1 Sol (2026-09-29); Artificial Analysis marks GPT-6 Sol as deprecated. In ChatGPT, "GPT-6" at Medium/High/Extra High effort routes to GPT-6 Sol (help.openai.com). Reasoning-effort variants (low/medium/high/max) are scored separately by Artificial Analysis.
- **Provider / access:** OpenAI API (`gpt-6-sol`; Responses API per OpenCode Zen listing), Codex, ChatGPT Work (Plus/Pro/Business/Enterprise/Edu); OpenCode Zen `opencode/gpt-6-sol` (API: openai-responses, base URL https://opencode.ai/zen/v1, per pi.dev); OpenRouter `openai/gpt-6-sol`; Vercel AI Gateway `openai/gpt-6-sol`; Azure AI catalog lists the 6.1 successor.
- **Release / knowledge:** 2026-09-22 release (OpenAI announcement, OpenAI Developer Community, TechCrunch); knowledge cutoff not verified in sources found.
- **IDs:** `openai/gpt-6-sol`; `opencode/gpt-6-sol` (no Free ID exists on Zen — only the paid ID was found; the 50%-off promo listing seen was for GPT-5.6 Sol, not GPT-6 Sol)
- **Context window:** 1,050,000 tokens total (OpenRouter model page "1.05M tokens"; pi.dev OpenCode listing for the sibling GPT-5.6 Sol shows 1,050,000; Artificial Analysis lists 1M for GPT-6 Sol (high) and 872k for the (medium) variant; developersdigest.tech states all three GPT-6 tiers share 1,050,000). Max output not verified.
- **Modalities:** text + image in; text out; reasoning yes (low/medium/high/max effort); tool calls yes (Codex/agentic use, "can begin answering while it continues to think or use tools" per ChatGPT release notes); JSON mode not verified.
- **Pricing (as of 2026-10-09):** $2.00 in / $10.00 out per 1M tokens (OpenAI announcement: GPT-5.6 Sol $4→$2, $20→$10, 50% cheaper); cached input reads discounted 90% (~$0.20/1M, per MacRumors citing OpenAI). Paid $; no free tier, so no free-tier privacy caveat applies.
- **Architecture:** proprietary; parameter count, MoE status and weights not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** — nearest verified: Terminal-Bench 4.0 **44%** (Artificial Analysis X post, 2026-09-22; vs 40% for GPT-5.6 Sol; version differs from TB2.1)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** — nearest verified: AutomationBench-AA **62%** (Artificial Analysis X post; vs 60% for GPT-5.6 Sol)
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 (max effort) / rank not captured**; also 42 (high), 34 (low) (artificialanalysis.ai/models/gpt-6-sol, -high, -low); AA notes Intelligence Index "level with GPT-5.6 Sol"; BenchLM: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found** — nearest verified: AA-Omniscience Index **27** (up from 22 for GPT-5.6 Sol; Artificial Analysis X post)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** — AA states Coding Agent Index is "level with GPT-5.6" but no numeric value was captured; OpenAI cites FrontierCode gains without a number captured here; Terminal-Bench 4.0 44% (AA)
  Long context:
- no long-context retrieval reported (no MRCR / RULER / GraphWalks value found for this model ID)

### Normalized scores (1-100)

- **Tool use: 58/100.** Terminal-Bench 4.0 44% and AutomationBench-AA 62% (both Artificial Analysis) place it in the mid band (TB 45-60% = 50-70); capped by absence of Tau3-Banking, GDPval-AA, OSWorld and the fact that the TB score is on v4.0, not the v2.1 harness in the rubric.
- **Reasoning: 70/100.** AA Intelligence Index 48 (max effort; 42 at high) sits between the mid band (55-65) and the frontier threshold (Index 60+ = 90+); AA-Omniscience Index 27 is modest. Capped by no verified GPQA Diamond, HLE, LCR or CritPt numbers.
- **Context window: 95/100.** Verified ≥1M tier (1,050,000 via OpenRouter / OpenCode Zen listing / AA 1M); scored 95 not 100 because no ≥98% retrieval at 512K+ (MRCR/RULER) is published for this model.
- **Multimodal: 65/100.** Text + image input, text output (Artificial Analysis, pi.dev/OpenCode Zen); no verified audio, video or PDF input and no non-text output.
- **Coding: 60/100.** Only verified coding-adjacent number is Terminal-Bench 4.0 44% (mid band); AA says Coding Agent Index is level with GPT-5.6 Sol but no value captured. Capped by missing SWE-bench Verified, LiveCodeBench, SciCode and DeepSWE scores.
- **Cost efficiency: 75/100.** Paid at $2.00/$10.00 per 1M (cached input ~$0.20); interpolated between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors. Not counted in Overall.
- **Overall Score: 69.6/100.** Mean of (58 + 70 + 95 + 65 + 60) / 5 = 69.6; best fit: cost-conscious agentic coding and document-heavy workflows needing a 1M context at ~half of Astra-class pricing — but prefer the newer GPT-6.1 Sol (same price tier, AA Index 52) since GPT-6 Sol is already marked deprecated by Artificial Analysis.

---

## Signature

- Provided by: **Claude Fable 5.1 (anthropic/claude-fable-5-1)** — 2026-10-09
- Method: public internet research via fresh web search (OpenAI announcement and Developer Community post, help.openai.com release notes, Artificial Analysis model pages and X post, OpenRouter, pi.dev/OpenCode Zen listing, TechCrunch, MacRumors, developersdigest.tech); search quota was exhausted before SWE-bench/GPQA/HLE/MRCR pages could be fetched, so those are marked not found rather than estimated; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
