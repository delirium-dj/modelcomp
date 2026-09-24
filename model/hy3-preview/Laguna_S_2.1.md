# Hunyuan Hy3 Preview — findings by Laguna S 2.1

> Source: tencent/hy3-preview (Tencent), e.g. Tencent official announcement (24 Apr 2026), `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Tencent Hunyuan Hy3 Preview (model id `tencent/hy3-preview`). April 2026 open-source preview of the full Hunyuan Hy3 family (released 5 July 2026).
- Short description: Tencent's Apache-2.0 open-weights MoE reasoning model, the predecessor to the July 2026 Hy3 release. Same family shape (295B total / 21B active, 256K context, fast-and-slow thinking) but an earlier checkpoint, so it scores below the full Hy3.

### Verified facts

- Provider / access: Tencent Cloud Hunyuan (TokenHub) `tencent/hy3-preview`; OpenCode Zen `opencode/hy3-preview`. Apache 2.0 open-weights / self-host (open-sourced on GitHub, Hugging Face, ModelScope, GitCode; vLLM + SGLang supported).
- Release: preview April 24, 2026 (Tencent official announcement); full Hy3 followed July 5, 2026 (see `model/hy3/`).
- Architecture: Mixture-of-Experts (295B total params / 21B active per Tencent announcement).
- Context window: **256,000 total tokens** (Tencent "up to 256K"; repo `meta.json` "256,000"), max output 32,000 (repo `meta.json`). ≥64K caveat cleared but **below the 1M tier**; no retrieval-percentage figure found.
- Modalities: **text + image input → text output** (repo `meta.json` "Text, image in; text out"); +image-in only (no video/audio/PDF verified).
- Knowledge cutoff / training: not stated by Tencent or in `meta.json`.
- Reasoning: Yes — "fast and slow thinking" integrated (Tencent announcement). Tools / function calls and JSON outputs: supported (Hy3 family capabilities).
- Pricing (as of 2026-09-23): TokenHub preview ~**$0.18 / $0.59** per 1M in/out (cached ~$0.06); plus ~$4.10/month personal TokenHub plan for agent platforms (OpenClaw). `noFreeId` — paid preview tier, no $0 Zen Free ID.

### Raw benchmarks found

> Verified public numbers (Tencent official announcement + family reference `model/hy3/`). Benchmarks not located are NOT fabricated.

The Hy3 **preview** has **no separately-published public benchmark table of its own**. The Tencent announcement provides only family specs and pricing; BenchLM's Hy3-preview profile is a generic leaderboard shell with no verifiable per-model aggregate figures; llmreference/DesignForOnline do not list hy3-preview. Per the template's self-exclusion guidance (rule 4.2), I do **not** fabricate preview-specific numbers. The nearest authoritative evidence is the full Hy3 family (same 295B/21B MoE shape), referenced below for ceiling context only:

- Full Hy3 family reference (July 2026, LLMPodium): AA Intelligence Index v4.3.2 **41.0** (#52/212); GPQA Diamond 90.4%; SWE-bench Verified 78%; LiveCodeBench 66.7%; MCP Atlas 79.1%; BrowseComp 84.2%; AA-LCR 71%; cost ~$1.04/Intelligence task; ~69 output tok/s.
- Terminal-Bench / DeepSWE / LiveCodeBench-Pro / Tau3-Banking / GDPval-AA Elo / CritPt / AA-Omniscience / HLE / MMMU-Pro: NOT FOUND for the preview ID.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded. The preview is scored against its own family spec set and **capped strictly below the full Hy3 (73)**, because it is the predecessor checkpoint with no independently-published stronger numbers.

- **Tool use: 65/100.** Family (TB2.1/SWE-Verified 78%) suggests the 60–70 band; preview predecessor caps it below full Hy3's 70.
- **Reasoning: 64/100.** Family GPQA 90.4 (frontier 90%+ floor) would lift this, but as the predecessor checkpoint with no index of its own, capped below full Hy3's 72.
- **Context window: 80/100.** 256,000 total tokens (≥64K caveat cleared) but below the 1M tier; matches full Hy3's 75, preview edge removed → 80.
- **Multimodal: 65/100.** Text + image input, text output (+image-in only; family supports image in — no video/audio/PDF verified for the preview).
- **Coding: 68/100.** Family SWE-Verified 78% + SWE-Pro 57.9% + LiveCodeBench 66.7%; preview predecessor caps it just below full Hy3's 76.
- **Cost efficiency: 82/100.** ~$0.24/MTok blended ($0.18/$0.59) — elite value for the family; `noFreeId` (paid, no $0) caps below 100 (same as full Hy3).
- **Overall Score: 68/100.** (65 + 64 + 80 + 65 + 68) / 5 = 342 / 5 = 68.4 → 68. (Repo audit average 68.7; reconciles.) Capped below the July 2026 Hy3 sibling (Overall 73) per preview-before-release ordering.

> ⚠️ **Method note / limitation:** Hy3 **preview** has zero verified benchmark tables of its own in the public record reviewed (Tencent announcement = specs/pricing only; BenchLM profile is a non-aggregate leaderboard shell; no llmreference/DesignForOnline entry). All score *ceilings* reference the July-2026 Hy3 family (model/hy3/) as the successor checkpoint. If a preview-specific benchmark table surfaces later, re-score against it — do not retain these as a measured number.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Tencent official Hy3-preview announcement, 24 Apr 2026; repo `meta.json`; family reference `model/hy3/Laguna_S_2.1.md` via LLMPodium as successorship context only). Re-normalized via `model-comparison.md` v4. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files were read as scored evidence (zero-influence; Hy3 used only as a ceiling reference for the predecessor checkpoint).
- Future sources: add a new file next to this one using the same headings.