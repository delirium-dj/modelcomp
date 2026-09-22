# Gemini 3.1 Pro — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's frontier reasoning model released February 19, 2026, optimized for complex agentic workflows, software engineering, and multimodal tasks; features a thinking-level parameter for balancing reasoning depth vs cost.
- **Provider / access:** Google (`google/gemini-3.1-pro`); available via Google AI Studio and Vertex AI. Chat Completions API; Responses API.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-pro` (no Zen Free ID found; paid pricing)
- **Context window:** 1,048,576 tokens (~1M) in production; 1M verified via API documentation. Note: 2M capacity mentioned in some earlier reports but 1M is the standard production spec.
- **Modalities:** Text + image + audio + video input; text output; reasoning yes (thinking_level parameter); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-02-19):** $2.00 / $12.00 per 1M input/output tokens (≤200K); $4.00 / $18.00 per 1M input/output tokens (>200K). Thinking tokens billed at output rates. Paid — no free tier.
- **Architecture:** Proprietary transformer (Google); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (published benchmark, February 2026)
- Terminal-Bench 2.1: no separate TB2.1 score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google official launch benchmarks, February 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **30** (Artificial Analysis, 2026)
- ARC-AGI-2: **77.1%** (vs Gemini 3 Pro at 31.1% — major improvement)

Coding:

- SWE-bench Verified: **80.6%** (Google official launch benchmarks, February 2026)
- SWE-bench Pro / DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.0 68.5% is high mid-tier (frontier ref ~88%+ TB2.1; TB2.0 ~68% maps to ~76 adjusted); no Tau3/GDPval/Claw-Eval data. Scored 76 reflecting strong but not frontier agentic capability.
- **Reasoning: 90/100.** GPQA 94.3% is frontier-class (ref ≥90% → 90–100); ARC-AGI-2 77.1% is strong abstract reasoning. AA Index 30 is lower than expected given the GPQA score, suggesting speed/cost tradeoffs. Scored 90 anchored on GPQA frontier performance.
- **Context window: 95/100.** 1,048,576 tokens (≥1M) → tier mapping 95–100; scored 95 as retrieval at >200K charged at premium rate which may affect practical use.
- **Multimodal: 90/100.** Text + image + audio + video input confirmed. No non-text output or PDF. Per methodology: image+video+audio in = 90–100; scored 90.
- **Coding: 83/100.** SWE-bench Verified 80.6% is strong (frontier ref ≥90% = 90–100; 80–89% = 80–89); TB2.0 68.5% is mid-tier. No DeepSWE/LiveCodeBench anchor. Scored 83 reflecting solid agentic SE below top frontier.
- **Cost efficiency: 86/100.** $2/$12 per 1M tokens for ≤200K; $4/$18 for >200K. Scored based on the base ≤200K rate = 85–87 range; scored 86.
- **Overall Score: 87/100.** Mean of (Tool 76 + Reasoning 90 + Context 95 + Multimodal 90 + Coding 83) / 5 = 434 / 5 = 86.8 → 87. Best-fit: excellent for reasoning-heavy tasks requiring long context and multimodal input; thinking_level parameter enables cost/quality tuning.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Google official launch benchmarks, Artificial Analysis, published benchmark reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
