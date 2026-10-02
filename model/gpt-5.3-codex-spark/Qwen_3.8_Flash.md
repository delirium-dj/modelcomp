# GPT-5.3 Codex Spark — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.3-codex-spark`; served on Cerebras WSE-3)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's first real-time coding model — a distilled/pruned sibling of GPT-5.3-Codex served on Cerebras Wafer-Scale Engine 3 at **>1,000 tokens/sec**, released 2026-02-12 as a research preview for interactive in-the-flow edits. **Extremely thin evidence base:** the only numeric benchmark in existence is a third-party estimate of TB 2.0 ~58.4%. All reasoning/coding/long-context rows are "no verified public score." The value proposition is speed (>1000 tok/s, -80% roundtrip overhead, -50% TTFT) and the "companion not replacement" positioning — real-time inline edits and quick refactors paired with a full Codex model for verification.
- **Provider / access:** ChatGPT Pro users via Codex app/CLI/VS Code (research preview, separate rate limits); API limited to select design partners — **no public per-token pricing**. `opencode/gpt-5.3-codex-spark` (Zen catalog listing).
- **Release / knowledge:** 2026-02-12 (OpenAI announcement; 7 days after full GPT-5.3-Codex). Knowledge cutoff not published.
- **IDs:** `openai/gpt-5.3-codex-spark`; `opencode/gpt-5.3-codex-spark` (Zen).
- **Context window:** **128,000 tokens** (official OpenAI announcement; no max-output disclosed). Curated `meta.json` agrees (though "Standard pricing" is a placeholder).
- **Modalities:** **Text in / text out** only (explicit at launch per OpenAI; multimodal planned for later family members, not this variant). Agentic coding loop; minimal targeted edit style; no auto-tests unless asked.
- **Pricing (as of 2026-10-02):** No per-token API price published; research preview bundled with ChatGPT Pro subscription; design-partner API pricing undisclosed. Full-Codex $1.75/$14.00 explicitly does NOT transfer. Cost excluded from Overall.
- **Architecture:** Proprietary distilled Codex variant on Cerebras WSE-3 (first OpenAI production deployment off Nvidia); undisclosed parameters; per-roundtrip overhead −80%, per-token overhead −30%, TTFT halved via persistent WebSocket.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (OpenAI launch post, Cerebras blog, CometAPI analysis) and `Muse_Spark_1.3.md` (the-decoder.com, siliconangle.com, ai-tldr.dev, aireleasetracker.com — 2026-10-01). **Evidence state: near-placeholder.** One provisional TB number; everything else is qualitative vendor claims. OpenAI's own chart is image-only (not extractable). No independent BenchLM/AA/Vals coverage for this ID.

Agent / tool use:

- Terminal-Bench 2.0: **~58.4%** (third-party estimate via the-decoder reporting OpenAI figures: Spark 58.4% vs full Codex 77.3% vs GPT-5.1-Codex-mini 46.1%) — provisional
- GDPval-AA / τ²/τ³ / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Index / Omniscience: **zero rows** for this variant
- Vendor qualitative: "surpasses GPT-5.2-Codex reasoning with 25% faster output and ~half the tokens" — no attached measured benchmark

Coding:

- SWE-Bench Pro: "similar accuracy in ~2-3 min vs 15-17 min for full Codex" (vendor qualitative, **no absolute percentage published**)
- Beats GPT-5.1-Codex-mini on SWE-Pro + TB (vendor qualitative)
- LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found**

Long context:

- 128K text-only; **zero retrieval measurements**.

Multimodal:

- None — explicitly text-only at launch per OpenAI.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. **Scoring philosophy:** with one provisional TB number and no other measurements, most dimensions are scored at the honest midpoint of what limited evidence implies — not borrowed from full GPT-5.3-Codex (which scored 81 in a prior report; Spark is explicitly weaker) and not from the vendor's qualitative "beats mini" claims.

- **Tool use: 65/100.** TB 58.4% is real evidence of terminal/agent capability — between GPT-5.1-Codex-mini (46.1%) and full Codex (77.3%), close to mid. The model operates as a real coding agent in Codex with tool-driven editing. But zero GDPval/τ²/MCP coverage caps confidence. Kimi 60, Muse 68.
- **Reasoning: 55/100.** No measured reasoning benchmarks exist. The distillation trade-off is explicitly acknowledged by OpenAI ("reduced multi-step reasoning depth"). The vendor's qualitative "surpasses GPT-5.2" claim is unmeasured. Kimi 55, Muse 60. Scored at the honest "distilled sibling with unknown reasoning ceiling."
- **Context window: 58/100.** 128K = 100K–200K band (50–64), upper-mid of the band; no retrieval measurements, max output undisclosed. Kimi 62, Muse 58.
- **Multimodal: 15/100.** Explicitly text-only (OpenAI stated) = floor band 10–20. All raters agree.
- **Coding: 68/100.** TB 58.4% shows genuine agentic coding ability at speed; SWE-Pro similar-accuracy-to-full-Codex claim is impressive if true but unquantified. No SWE-V/LCB absolute numbers exist. Above the mini line per vendor. Kimi 65, Muse 74. Scored at 68 — between them.
- **Cost efficiency: 60/100 (provisional).** No per-token price; ChatGPT Pro subscription-gated; design-partner API only. Access is bundled but not independently metered — can't confirm value-per-dollar. Cost excluded from Overall.
- **Overall Score: 52/100.** Mean of Tool 65, Reasoning 55, Context 58, Multimodal 15, Coding 68 = 261/5 = 52.2 → **52**. Best fit: **ultra-low-latency interactive coding companion** (inline edits, quick refactors, boilerplate) paired with full GPT-5.3-Codex for verification — OpenAI's own positioning. Not a standalone agentic coder, not a reasoning model, and the **preview-status evidence vacuum means most capability claims remain unverified**. The cohort's 62.8 likely inherits from full Codex reputation. Kimi (51) and Muse (55) bracket this read honestly.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (OpenAI launch post, Cerebras blog, CometAPI analysis) + `Muse_Spark_1.3.md` (the-decoder, siliconangle, ai-tldr, aireleasetracker). Curated `meta.json` is a placeholder template. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **only one numeric benchmark exists** (TB 58.4%, provisional/third-party), (b) OpenAI's own performance chart is image-only/unextractable, (c) the distillation trade-off means reasoning depth is vendor-acknowledged as reduced, (d) research preview status = expect churn and unpublished numbers.
- Revisit trigger: when OpenAI publishes official numeric SWE-Pro/GPQA benchmarks or the model exits research preview with public API pricing; if Cerebras publishes performance data for WSE-3-deployed LLMs.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
