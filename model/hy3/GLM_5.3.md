# Hy3 — findings by GLM 5.3

- Source: Tencent (`tencent/hy3`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan)
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) — **Hy3 Preview open-sourced 2026-04-23** (the first model after Tencent completed its February-2026 pretraining/RL infrastructure rebuild, explicitly "no longer obsessing over benchmark scores, but targeting Agent capability"), with the **official release on 2026-07-06** on Hugging Face as `tencent/Hy3` under **Apache 2.0 with no regional restrictions**. Second pass confirms the thin dossier's status — **"all benchmark figures published alongside the release are Tencent-reported"** (digitalapplied) — adds the architecture detail (**a separate 3.8B Multi-Token Prediction layer**; full-precision 598GB, FP8 build 300GB), and imports Hy3's **DeepSWE 28.0%** from the Hy4 launch coverage (the 28.0 → 64.3 generational jump). **Superseded by Hy4-preview (2026-08-28 — this repo's batch-11 dossier).** Top use case: cheap, unrestricted Apache-2.0 reasoning/coding base — now a snapshot pin for Hy4-era pipelines.
- **Provider / access:** TokenHub hosted preview (`tencent/hy3`, ~$0.18/~$0.59); Hugging Face open weights `tencent/Hy3` (Apache 2.0, no regional restrictions); **no OpenCode Zen ID**.
- **Release / knowledge:** **Preview 2026-04-23; official 2026-07-06** (both resolved); knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/hy3` (TokenHub preview); no Zen ID, no Free ID.
- **Context window:** **256K native** (confirmed across all coverage; 32K out per platform metadata).
- **Modalities:** text/image in; text out; reasoning (hybrid fast/slow thinking); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** TokenHub preview ~$0.18 in / ~$0.59 out per 1M; Apache-2.0 self-host (FP8 300GB — single multi-GPU node); with Hy4 shipped, expect preview pricing to be transitional.
- **Architecture:** MoE, 295B total / 21B active **+ a separate 3.8B MTP layer** (digitalapplied); 256K native context; open weights, Apache 2.0.

### Raw benchmarks found

> Second-pass status unchanged and now third-party-confirmed: **BenchLeader 404 (disclosed); the 14-row BenchLM dossier is Tencent-reported** ("all benchmark figures published alongside the release are Tencent-reported" — digitalapplied). One new row imports from the Hy4 launch coverage. Scores remain provisional on vendor evidence.

Agent / tool use:

- GDPval-AA: **1136 Elo / 27.3% normalized** (BenchLM, Tencent-reported); AA Agentic Index 25.6%; **DeepSWE: 28.0%** (new — via toolporto's Hy4-vs-Hy3 launch comparison; the number Hy4's 64.3 jumped from, and the single clearest agentic-coding datum for this ID)
- Terminal-Bench / τ² / τ³ / Claw-Eval / MCP-Atlas: still no verified public score (unchanged — the agent-first positioning was never independently measured)

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (Tencent-reported via AA harness — just under the 90% bar); HLE: **33.5%** (below the 40% bar); CritPt 4.9% (very weak); AA-LCR **79.0%** (good)
- AA Intelligence Index: **25.3** (BenchLM listing)
- **Honesty CONFLICT: Tencent's launch claims "the hallucination rate dropping from 12.5% to 5.4%" (luxsynthesis) vs the AA-measured Omniscience accuracy 32.0% / hallucination-rate field 74.1%** — the vendor's 5.4% and AA's ~74.1% cannot both describe the same behavior; both retained, scored on the AA measurement

Coding:

- SciCode / AA-SciCode: **48.6%** (below the 55% reference); AA Coding Index 58.8%; **DeepSWE 28.0%** (see agents above — weak)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: still no verified public score (unchanged)

Long context:

- 256K native confirmed; AA-LCR 79.0% — good within the window; no MRCR/RULER rows.

Multimodal:

- Text+image in per platform metadata; no published vision benchmark rows for this ID (unchanged); Design Arena Website 1193 (retained).

### Normalized scores (1–100)

- **Tool use: 45/100.** Held: GDPval 27.3% and Agentic Index 25.6% remain low-mid, DeepSWE 28.0% adds a weak agentic-coding datum, and the agent-first positioning was never independently measured — the core harnesses (TB/τ/Claw) stay unpublished.
- **Reasoning: 60/100.** Lowered from 62: GPQA 89.7% nearly reaches the bar and AA-LCR 79.0% is good — but HLE 33.5%, CritPt 4.9%, AA Index 25.3, and the honesty conflict (vendor 5.4% vs AA-measured ~74.1% hallucination, scored on AA) hold it mid-band.
- **Context window: 78/100.** Held: 256K native confirmed across all coverage, with good measured AA-LCR 79.0% inside it.
- **Multimodal: 65/100.** Held: text+image input per platform metadata; zero measured vision rows.
- **Coding: 50/100.** Lowered from 52: the imported DeepSWE 28.0% joins SciCode 48.6% and Coding Index 58.8% below the frontier references, with the mainstream SWE harnesses still unpublished.
- **Cost efficiency: 96/100.** Held: ~$0.18/$0.59 hosted, Apache 2.0 with **no regional restrictions** (the differentiator), FP8 self-host at 300GB — cheap and fully unrestricted.
- **Overall Score: 60/100.** (45 + 60 + 78 + 65 + 50) / 5 = 59.6 → 60, essentially unchanged from 60.4. Best-fit: a cheap, unrestricted Apache-2.0 reasoning/coding base whose agent-first story was never independently measured — near-bar GPQA and good long-context reasoning on Tencent-reported numbers, weak DeepSWE/SciCode, and a vendor-vs-AA honesty conflict — now fully superseded by Hy4-preview (this repo's batch-11 dossier) at every measured level; pin Hy3 only for license-restriction or snapshot reasons.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader 404 — disclosed; DDG-lite searches surfacing vncmac/luxsynthesis/insideai/digitalapplied/llm-agent/aimodeling release coverage — the 2026-04-23 Preview and 2026-07-06 official dates, the 3.8B MTP layer and 598GB/300GB builds, the Apache-2.0-no-restrictions terms, digitalapplied's explicit all-benchmarks-Tencent-reported confirmation, and luxsynthesis's 5.4% hallucination claim flagged against the AA-measured 74.1%; **DeepSWE 28.0% imported from toolporto's Hy4-vs-Hy3 launch comparison as surfaced during this cycle's Hy4 pass**; the first-pass BenchLM rows retained with the vendor-only caveat strengthened); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
