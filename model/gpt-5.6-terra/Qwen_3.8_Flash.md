# GPT-5.6 Terra — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.6 Terra (`openai/gpt-5.6-terra`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Terra pricing verified $2/$12 (Cost 70 provisional→verified) + knowledge cutoff Feb 16 2026 + 2026-10-28 further-cut flag, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis — elite math/repo coding with a severe Omniscience factuality flag.
- **Provider / access:** OpenAI Responses API (`gpt-5.6-terra`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (GPT-5.6 family, "Introducing GPT-5.6"); knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-terra`.
- **Context window:** 1,048,576 (1M) curated meta; BenchLM lists 1.05M.
- **Modalities:** text, image, audio, video, PDF in; text out (curated meta); reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Paid-tier pricing (exact rate not in curated meta; GPT-5.6-family band — treat Cost as provisional).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (52 of 618 rows), citing OpenAI "GPT-5.6" and the GPT-5.6 system card, Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, NeoCognition and VulcanBench (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI; Vals 77.5%) — but TB 3.0 only 20.8%
- BrowseComp: **87.5%**; τ²-bench 86.3%; OSWorld 2.0 50.2%; CyberGym 81.8%
- GDPval-AA: **1583** (AA normalized 46.6%); Toolathlon 53.1%; AA ITBench 51.0%; APEX-Agents 38.9%
- AA Agentic Index 43.7%; ExploitGym 23.2%; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **92.9%** (AA 92.5; Vals 90.9); HLE-Verified **51.1%** (AA 42.9)
- ARC-AGI-2: **83.9%** (ARC Prize) — ARC-AGI-3 only 0.8%
- FrontierMath (legacy / v2 T1-3 / Tier-4): **84.9% / 84.9% / 68.3%** (OpenAI) — elite
- Intelligence Index **55.0**; AA-LCR 83.0; CritPt 30.0; HealthBench Pro 57.7 / Hard 32.7
- Omniscience Index **0.1** / Accuracy 46.8% / **Hallucination 87.9%** (severe flag); MMLU-Pro (Vals) 86.7; IFBench 71.2

Coding:

- SWE-bench (Vals): **95.4%**; Terminal-Bench 2.1 87.4%; LiveCodeBench (Vals) 85.9%
- AA Coding Index 76.7%; VulcanBench v3 87.0; DeepSWE **69.6%** (under 74 ref); SWE-bench Pro 63.4%
- FrontierCode 1.1 Extended 55.8% (Devin); AA-SciCode 55.0%; CursorBench 3.2 64.9% / 4.0 41.3%

Multimodal / long context:

- MMMU-Pro 80.7 (w/ Python 82.0, AA 80.7) — the only published visual row; omni-input per curated meta
- AA-LCR 83.0 at 1.05M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 87.4% meets the ~88 ref with BrowseComp 87.5%, τ² 86.3% and CyberGym 81.8%; GDPval-AA 1583 (under 1750), TB 3.0 20.8%, Agentic Index 43.7% and ApprenticeBench 16% keep it a notch under the Sol-tier 90s.
- **Reasoning: 88/100.** GPQA-Diamond 92.9%, HLE-Verified 51.1%, ARC-AGI-2 83.9%, FrontierMath 68–85% and Index 55.0 are all high bars cleared; the Omniscience Index 0.1 with 87.9% hallucination rate and ARC-AGI-3 0.8% are a hard cap.
- **Context window: 96/100.** 1.05M-token window meets the ≥1M tier and AA-LCR 83.0 is strong, but no ≥98% long-context retrieval metric is reported, so short of 100.
- **Multimodal: 90/100.** Curated meta records text+image+audio+video+PDF in / text out — the audio/video band floor; published benchmark evidence is image-only (MMMU-Pro ~81–82) so it can't be rated higher.
- **Coding: 88/100.** SWE-bench (Vals) 95.4%, TB 87.4%, LiveCodeBench 85.9% and Coding Index 76.7% are top-tier; DeepSWE 69.6% (under 74 ref), SWE-bench Pro 63.4% and CursorBench 4.0 41.3% trim it.
- **Cost efficiency: 70/100.** (Second pass 2026-11-03 converts this from provisional to verified: OpenAI's July 30 repricing set Terra at **$2 / $12 per 1M**, restated by OpenRouter, Requesty and Inworld; sits just under the $3/$15 ≈ 60 anchor — 70 stands.) A 2026-10-28 community announcement reports a further Terra/Luna price drop whose exact figures are not yet verifiable — noted, not counted. Cost is excluded from Overall.
- **Overall Score: 90/100.** Mean of Tool 88, Reasoning 88, Context 96, Multimodal 90, Coding 88 = 90.0 → 90. Best fit: flagship agentic research, long-context synthesis and repo coding with omni input; never trust ungrounded factual recall (Omniscience Index 0.1 / 87.9% hallucination) — always retrieve, and consider Sol for pure coding or newer 6-series for frontier agency.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://openai.com/index/gpt-5-6/ (launch 2026-07-09: **"Sol is $5 input / $30 output; Terra is $2.50 input / $15 output; and Luna is $1 input"**; **"Update on July 30, 2026: OpenAI reduced … GPT‑5.6 Terra by 20%"**) and https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/ (**"Starting July 30, API pricing is $2 per million input tokens and $12 per million output tokens for Terra"**) · https://openrouter.ai/openai/gpt-5.6-terra, https://www.requesty.ai/models/openai/gpt-5.6-terra (**$2.00/$12.00**) and https://inworld.ai/models/openai-gpt-5-6-terra ($2/$12, **1.1M context / 128K out**) · family facts — https://simonwillison.net/2026/Jul/9/gpt-5-6/ (**all three 5.6 models: February 16, 2026 knowledge cutoff, 1M context, 128K max output**) and https://openai.com/index/previewing-gpt-5-6-sol/ ("Terra has competitive performance to GPT‑5.5 while being 2x cheaper") · lifecycle — https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925 (thread dated **2026-10-28: "a major Price drop for 5.6 Terra and Luna and Fast mode for 5.6-Sol"**) and https://neuraltrust.ai/blog/gpt-6-1-terra (successor-line **GPT-6.1 Terra** now profiled: 51 max / 38 medium / 29 low effort) · index context — https://benchlm.ai/benchmarks/artificialanalysis (2026-10-29 v5 board: GPT-5.6 Sol 58.9; no Terra-specific v5 row surfaced that contradicts the captured 55.0).

**What moved and how it was resolved:**

1. **Terra pricing verified (Cost 70 provisional → verified, no movement).** Pass 1 guessed from the family band citing "Sol $1.25/$10" — itself a contested promo figure (see the gpt-5.6-sol second pass). The authoritative sequence is: launch $2.50/$15 (Jul 9) → **$2/$12 from Jul 30** (OpenAI's own post, restated by three providers). $2/$12 sits just under the $3/$15 ≈ 60 anchor, so the existing 70 stands — now on verified numbers. The reported 2026-10-28 further drop is noted but its figures are unverified, so not folded in (never average contradictory price snapshots; the durable list is $2/$12).
2. **Knowledge cutoff gap closed.** Willison's launch coverage records the whole 5.6 family at a **February 16, 2026 cutoff** — pass 1's "not disclosed" is resolved; no band depends on it, recorded for completeness.
3. **Index and benchmark rows stand.** No Terra-specific v5 re-measurement surfaced that contradicts the captured Intelligence Index 55.0 (the v5 board shows sibling Sol at 58.9 — the batch-wide drift applies but moves nothing); TB 2.1 87.4%, SWE-bench (Vals) 95.4%, and the severe Omniscience 0.1 / 87.9% hallucination flag are all uncontradicted, so Tool 88 / Reasoning 88 / Coding 88 hold.
4. **Succession: still served, 6-series above it.** GPT-6/6.1 Terra now exists as the successor line (neuraltrust profiles 6.1 Terra at 51 max-effort), and OpenAI's Oct 7 GPT-6 rollout touched the family — but 5.6 Terra remains listed and actively repriced (the Oct 28 drop applies to it), so this is "previous generation, served" rather than a retirement; Inworld's 1.1M figure versus the documented 1M/128K is noted as provider rounding; Context stays 96 on the curated/BenchLM 1M–1.05M agreement.

**Scores changed by this pass:** None numerically. Cost 70 converted provisional→verified on $2/$12; Oct-28 further-cut flagged unverified. Tool 88, Reasoning 88, Context 96, Multimodal 90, Coding 88 → Overall = half-up mean(88, 88, 96, 90, 88) = 450/5 = **90, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing OpenAI GPT-5.6 and its system card, plus Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, NeoCognition and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenAI launch/repricing posts, OpenRouter, Requesty, Inworld, Willison, community thread, neuraltrust, BenchLM v5 board); Terra price verified at $2/$12 (**Cost 70 now verified, unchanged**), Feb 16 2026 cutoff recorded, Oct 28 further-drop flagged unverified, successor line noted without re-scoring — **no dimension changed and Overall remains 90**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
