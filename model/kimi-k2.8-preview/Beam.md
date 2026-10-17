# Kimi K2.8 Preview — findings by Beam

- Source: Moonshot AI/Kimi K2.8 Preview, `moonshotai/kimi-k2.8-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's preview model (Sep 11, 2026) with performance close to K3, more efficient thinking than K2.7 Code. 1M context, adjustable thinking effort (low/high/max), multimodal (text/image/video).
- **Provider / access:** Moonshot API (Kimi Code) `kimi-for-coding` (upgraded in place); OpenRouter; OpenCode.
- **Release / knowledge:** Released 2026-09-11; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.8-preview`
- **Context window:** 1,000,000 tokens; max output not stated (1M max).
- **Modalities:** text, image, video in; text out; reasoning yes (low/high/max, default max); tool calling yes. Closed (preview).
- **Pricing (as of 2026-10-17):** Not published (Kimi Code bundled).
- **Architecture:** proprietary; params not published. Same family as K3 (2.8T).

### Raw benchmarks found

- No public benchmark numbers for K2.8 Preview in sources. Kimi Code docs claim "performance close to K3, with more efficient thinking" and "significantly more efficient thinking than K2.7 Code."
- K2.8 Preview serves K3 series requests when thinking is disabled (no-thinking mode).
- Model ID unchanged (`kimi-for-coding`); clients work without config changes.
- llm-stats: 0 reported benchmarks for K2.8 Preview.
- OpenCode data: no usage data (0 tokens).

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherited from K3 (agentic 69.4, Terminal-Bench 2.1 88.3%, BrowseComp 91.2%, MCP Atlas 84.2%); K2.8 claims "performance close to K3."
- **Reasoning: 82/100.** Inherited from K3 (ARC-AGI-1 94.5%, GPQA 93.5%); K2.8 claims more efficient thinking.
- **Context window: 92/100.** 1M window (inherited from K3).
- **Multimodal: 88/100.** Inherited from K3 (multimodal lane #1/54).
- **Coding: 78/100.** Inherited from K3 (coding lane #22/150, Kimi Code Bench 72.9%); K2.8 claims improved coding/agent capabilities.
- **Cost efficiency: 75/100.** Pricing not published (bundled with Kimi Code).
- **Overall Score: 83.6/100.** Provisional mean of five quality dims; inherited from K3 (BenchLM 69.86) with "more efficient thinking" claim. Low-confidence.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Kimi Code docs, llm-stats, OpenCode data, Moonshot status); scores are normalized 1–100 interpretations, not official vendor scores. K2.8 Preview has no public benchmarks; scores inherited from K3.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>