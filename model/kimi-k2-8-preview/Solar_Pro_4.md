# Kimi K2.8 Preview — findings by Solar Pro 4

- Source: Moonshot AI/Kimi K2.8 Preview, e.g. Moonshot AI (`moonshotai/kimi-k2.8-preview`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (Moonshot AI proprietary, Kimi family)
- **Short description:** Moonshot AI's mid-tier coding and agentic model, released September 11, 2026 inside Kimi Code product. Served at the same kimi-for-coding API model ID that previously pointed to Kimi K2.7 Code — a drop-in upgrade requiring no client configuration change. Opens the full 1,048,576-token context window to every Kimi Code membership tier (previously reserved for higher plans). Exposes three adjustable thinking-effort levels (low, high, max; max is default) — narrower than K3's six-level scheme. Moonshot reports overall capability close to flagship Kimi K3. No independent benchmark score published yet for this checkpoint.
- **Provider / access:** Kimi Code and Kimi Work products only (kimi-for-coding model ID). NOT available through Moonshot's general developer API or pricing page. Bundled into existing Kimi subscription — not billed per token.
- **Release / knowledge:** Released 2026-09-11; knowledge cutoff not explicitly stated.
- **IDs:** `kimi-for-coding` (Kimi Code/Kimi Work products only). No separate model ID.
- **Context window:** 1,048,576 tokens (1M) input; max output not explicitly stated (likely 128K+). Full 1M window now open to every membership tier.
- **Modalities:** Text and image input; text, tool-calls, and code output. No confirmed audio or video input (following K3's verified capability set). Tool calls: yes. Function calling: yes. Structured output: yes. Reasoning: yes (three thinking-effort levels: low, high, max; max is default).
- **Pricing (as of 2026-09-18):** No per-token price. Access bundled into existing Kimi subscription (free tier and paid plans — exact tier prices not independently verifiable). Moonshot's platform pricing page lists rates for other models but no separate K2.8 line item.
- **Architecture:** Proprietary (no open weights, no Hugging Face repo). Likely shares K2.7 Code's MoE design (1T total parameters, 32B active per token) since served at same model ID — but this is inferred, not confirmed. No model card, parameter count, or architecture description published for K2.8 Preview.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Kimi K2.8 Preview specifically. (No published SWE-bench, GPQA, or other quantified benchmark score exists for this checkpoint.)
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Kimi K2.8 Preview specifically. (K3 scored 93.5% — but this belongs to K3, not K2.8, and should not be assumed to carry over.)
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for Kimi K2.8 Preview specifically.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (K3 scored 67.5% DeepSWE — but this belongs to K3, not K2.8)

Long context:

- Long-context recall: no verified public score found for Kimi K2.8 Preview specifically. 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified benchmark scores available for Kimi K2.8 Preview specifically. Moonshot's only public performance claim is qualitative: overall capability close to K3. K3's scores (GPQA 93.5%, DeepSWE 67.5%) belong to K3 and should not be assumed to carry over. Capped by: complete absence of verified benchmarks for this checkpoint. Score 60 reflects uncertainty — the model is likely competitive (close to K3 per vendor) but unproven.
- **Reasoning: 60/100.** No verified benchmark scores available. K3 scored GPQA 93.5% and DeepSWE 67.5% — but these belong to K3. K2.8 Preview exposes three thinking-effort levels (suggesting reasoning capability) but no quantified scores. Capped by: complete absence of verified reasoning benchmarks. Score 60 reflects uncertainty.
- **Context window: 100/100.** 1,048,576 tokens (1M) context window confirmed. Maximum tier (≥1M = 95-100). Full 1M window now open to every Kimi Code membership tier (previously reserved for higher plans). Score 100 reflects top-tier context window.
- **Multimodal: 50/100.** Text and image input; text, tool-calls, and code output. No confirmed audio or video input (following K3's verified capability set — some third-party trackers have claimed video input for K2.8 without Moonshot source). Per methodology: +image in = 60-70. With text+image input, score 50 (lower end due to uncertainty about exact capabilities). Capped by lack of confirmed video input and non-text output.
- **Coding: 60/100.** No verified benchmark scores available. Moonshot's only claim is overall capability close to K3. K2.8 Preview is positioned as a mid-tier coding model (between K2.7 Code and K3). Capped by: complete absence of verified coding benchmarks. Score 60 reflects uncertainty — likely competitive (close to K3 per vendor) but unproven.
- **Cost efficiency: 90/100.** No per-token price — access bundled into existing Kimi subscription. Free tier and paid plans available (exact prices not independently verifiable). For existing Kimi subscribers, K2.8 Preview is a no-cost, no-config upgrade. For new users, cost depends on Kimi subscription tier. Capped by: inability to compare per-token pricing with other models (bundled pricing model), and lack of independent price verification. Score 90 reflects bundled/no-cost access for existing subscribers.
- **Overall Score: 66/100.** Mean of (60 + 60 + 100 + 50 + 60 + 90) / 6 = 70.0 → **70**. Best-fit recommendation: Kimi K2.8 Preview is a no-cost, no-config upgrade for existing Kimi Code subscribers wanting K3-level coding help without a premium plan. The full 1M context window is now open to every membership tier (previously reserved for higher plans). However, NO independent benchmark score has been published for this checkpoint — all performance claims are qualitative (close to K3) and should be treated as unverified. For teams needing benchmarked, independently documented models, Kimi K3 (GPQA 93.5%, DeepSWE 67.5%) or open-weighted K2.7 Code (Modified MIT license) are better choices. For teams needing direct per-token API billing, K2.8 Preview is not available through Moonshot's general developer API.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Moonshot Kimi Code changelog), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Note: NO verified benchmark score exists for Kimi K2.8 Preview — all quantitative scores belong to K3 and should not be assumed to carry over. Scores are conservative due to complete absence of verified benchmarks.
- Future sources: add a new file next to this one, e.g. `GLM_5_1_Coding.md`, using the same headings.
