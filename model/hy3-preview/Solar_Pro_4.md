# Hy3 Preview — findings by Solar Pro 4

- Source: Tencent/HY3 Preview, e.g. Tencent (`tencent/hy3-preview`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (Tencent open-weight, Hunyuan family preview)
- **Short description:** Tencent's HY3 model preview release from April 2026, preceding the full July 2026 release. A preview version of HY3 with the same architecture (295B/21B MoE, 256K context, hybrid fast-and-slow thinking) but likely with fewer refinements than the final release. Preceded by HY2 and succeeded by full HY3 release. Likely shares the same specs as full HY3 but may have slightly lower benchmark scores.
- **Provider / access:** Hugging Face, ModelScope, GitHub, GitCode (open weights — Apache 2.0 license). Tencent Cloud TokenHub preview pricing. Same access as full HY3.
- **Release / knowledge:** Preview launched 2026-04; superseded by full HY3 release 2026-07. Knowledge cutoff not explicitly stated.
- **IDs:** `tencent/hy3-preview` or `HY3-Preview` (Hugging Face, ModelScope, GitHub, GitCode). Same access as full HY3.
- **Context window:** 256,000 tokens (256K) likely (same as full HY3). Max output 32,768 tokens likely.
- **Modalities:** Text and image input likely; text output. No confirmed audio or video I/O.
- **Pricing (as of 2026-09-18):** Open weights free to run yourself under Apache 2.0 license (GPU cost only). Same as full HY3. Tencent Cloud TokenHub preview pricing may apply.
- **Architecture:** Open-weight (Apache 2.0 license). MoE: 295B total parameters, 21B active per forward pass (same as full HY3). Hybrid fast-and-slow thinking architecture. 256K context window.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for HY3 Preview specifically. (Full HY3 scored 55% — preview may be slightly lower but unverified.)
- All other benchmarks: no verified public score found. HY3 Preview is a preview version — benchmark data likely shared with or similar to full HY3 release, but may be slightly lower.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for HY3 Preview specifically. (Full HY3 scored 62% — preview may be slightly lower but unverified.)
- All other reasoning benchmarks: no verified public score found.

Coding:

- All coding benchmarks: no verified public score found.

Long context:

- Long-context recall: no verified public score found for HY3 Preview specifically. Likely same 256K context as full HY3.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified benchmark scores available for HY3 Preview specifically. Full HY3 scored 55% on SWE-bench Verified — preview may be similar or slightly lower but unverified. Score 55 matches full HY3's SWE-bench score as a rough proxy.
- **Reasoning: 55/100.** No verified benchmark scores available. Full HY3 scored GPQA 62% — preview may be similar or slightly lower but unverified. Score 55 is conservative estimate.
- **Context window: 65/100.** Estimated 256K context window (same as full HY3). Not explicitly verified for preview but likely same architecture.
- **Multimodal: 45/100.** Text and image input likely (same as full HY3). No confirmed audio or video I/O.
- **Coding: 55/100.** No verified coding benchmarks available. Full HY3 scored 55% on SWE-bench Verified — preview may be similar or slightly lower but unverified.
- **Cost efficiency: 90/100.** Open weights free to run yourself under Apache 2.0 license (GPU cost only). Same as full HY3.
- **Overall Score: 55/100.** Mean of (55 + 55 + 65 + 45 + 55 + 90) / 6 = 60.8 → **61**. Best-fit recommendation: HY3 Preview is a preview version of HY3 (April 2026) superseded by full HY3 release (July 2026). For any deployment, use full HY3 instead — it has the same architecture (295B/21B MoE, 256K context, Apache 2.0) with confirmed benchmarks (SWE-bench 55%, GPQA 62%, MMLU 88%, AA Intelligence Index 52). Preview version likely has similar or slightly lower capabilities. Scores are provisional and conservative due to preview status and lack of verified benchmark data specific to the preview.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor documentation (Tencent), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: HY3 Preview is superseded by full HY3 release (July 2026). Scores are provisional and conservative due to preview status.
- Future sources: add a new file next to this one, e.g. `Hy4.md`, using the same headings.
