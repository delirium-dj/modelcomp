# Gemini 2.5 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's mid‑2025 Flash workhorse — the first Flash to carry the **1M context window + native multimodal (text/image/audio/PDF in)** at very low cost, and the direct ancestor of the 3.x Flash line. By late 2026 the **hard BenchLM/AA numbers show a model thoroughly outclassed** in reasoning and agentic capability: AA‑HLE 4.7%, τ²‑bench 14.9%, AA Intelligence Index 9.8, and a **93.0% Omniscience hallucination rate** — while its 1M window and broad modality mix remain genuine structural strengths. Kept for legacy compatibility.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`), Vertex AI, AI Studio; OpenCode Zen free tier.
- **Release / knowledge:** Released 2025‑06 (GA 2025‑07); knowledge cutoff Feb 2025 (Google docs).
- **IDs:** `google/gemini-2.5-flash`; free tier exists via AI Studio / Zen.
- **Context window:** **1,048,576 tokens (1M)** — confirmed in curated `meta.json` and benchlm.ai.
- **Modalities:** **text / image / audio / PDF in; text out** — real multimodal input including audio; tool calls; JSON; code execution; Google Search grounding. Reasoning toggle (`thinking` on/off).
- **Pricing (as of 2026‑10‑02):** legacy cheap Flash tier (historically ~$0.30 in / $2.50 out per Google; free tier available). Cost excluded from Overall.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (benchlm.ai scorecard, 2026‑09‑24) — full AA panel available. `Muse_Spark_1.3.md` reports **zero benchmark rows** and scores on reputation alone (Tool/Reasoning/Coding 70, Context 100, Multimodal 85 → Overall 79); rejected as unevidenced. Kimi's Overall 52 uses the hard data.

Agent / tool use:

- τ²‑bench (Tau2‑Bench): **14.9%** (benchlm.ai) — near‑floor agentic reliability
- All other agentic rows (Terminal‑Bench, GDPval‑AA, Toolathon, MCP‑Atlas): no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **68.3%** — mid‑band by 2026 standards
- HLE (AA‑HLE): **4.7%** — catastrophically below the 40% frontier bar
- AA‑LCR: **49.9%**; CritPt: **1.4%**
- FrontierMath v2: **4.8%** T1–3 / **4.2%** T4; AA‑IFBench: **39.0%**
- **AA‑Omniscience Index: −42.6; accuracy 26.1% / hallucination 93.0%** — catastrophic knowledge fabrication
- Artificial Analysis Intelligence Index: **9.8**; BenchLM overall 43/100, **#103 of 507**

Coding:

- SWE‑bench Verified / LiveCodeBench / SciCode: **no verified public score found** at this ID
- Historical 2025‑era vendor claim of ~63–68% SWE‑V (pre‑Verified migration) — not measured at current ID

Long context:

- 1M native window; AA‑LCR 49.9% at that window — **material retrieval decay** at scale
- No MRCR / RULER row at current ID

Multimodal:

- AA‑MMMU‑Pro: **65.5%**
- Design Arena Website: **1126 Elo** (text→website code, not vision input)
- Real image / **audio / PDF** input confirmed by Google docs; text‑only output

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology against the 2026 field. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's hard BenchLM data drives the scoring; Muse Spark's zero‑evidence reputation scores (Tool/Reasoning/Coding all 70) are rejected.

- **Tool use: 45/100.** τ²‑bench 14.9% is near‑floor and disqualifies it as a modern agent. It does have real function‑calling, code execution, and Search grounding tool surfaces (structural credit). Kimi 40; +5 for the genuine tool surface that predates τ² measurement. Muse 70 (reputation only) — rejected.
- **Reasoning: 40/100.** GPQA 68.3% is respectable mid‑band, but HLE 4.7%, CritPt 1.4%, AA Index 9.8, and **Omniscience 93% hallucination** are decisive negatives. FrontierMath 4.8% and IFBench 39% confirm this cannot operate at the 2026 frontier. Kimi 45; −5 because the Omniscience 93% rate is worse than the panel average it belongs to.
- **Context window: 82/100.** 1M native = 95–100 band per methodology, but the measured **AA‑LCR 49.9%** at that window shows material retrieval decay — the "usable‑at‑scale" caveat pulls it below the band floor. Kimi 62 (over‑discounts the 1M hard fact); Muse 100 (ignores the LCR measurement). 82 sits between: honest 1M + honest retrieval penalty.
- **Multimodal: 78/100.** Genuine **text+image+audio+PDF input**, text out — the +audio band is 90–100 in v4, but MMMU‑Pro 65.5% measured caps it, and text‑only output pulls it down. Design Arena 1126 is text→code, not vision. Kimi 66 (misses the audio band floor); Muse 85 (no evidence). 78 credits the real +audio +PDF input surface honestly.
- **Coding: 48/100.** **No verified SWE/LCB/SciCode rows** at this ID. Its 2025‑era code output was competent but the AA Index 9.8 and HLE 4.7 imply current‑field coding is well below 2026 mid‑tier. Kimi 45; +3 for the historical code‑execution surface. Muse 70 (pure reputation) — rejected.
- **Cost efficiency: 88/100.** Free tier + very cheap legacy Flash pricing; 1M context at Flash cost was the entire reason this model existed. Cost excluded from Overall.
- **Overall Score: 59/100.** Mean of Tool 45, Reasoning 40, Context 82, Multimodal 78, Coding 48 = 293/5 = 58.6 → **59**. Best fit: **legacy 1M‑window multimodal extraction and cheap bulk summarization** where the window and audio/PDF inputs matter more than reasoning depth. Anyone needing agentic reliability, coding, or frontier knowledge should move to 3.x Flash. Sits honestly between Kimi's 52 (hard‑data floor) and the 70.8 cohort / Muse 79 (reputation‑inflated); the structural 1M+audio strengths resist a Kimi‑level discount, but the Omniscience 93% and AA Index 9.8 make a Muse‑level 79 unsupportable.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` benchlm.ai full panel is the evidence base. `Muse_Spark_1.3.md` reports zero raw benchmarks and scores purely on 2025‑era Flash reputation — its 79 Overall is rejected. Curated `meta.json` correctly flags 1M and text/image/audio/PDF input. Flagged: (a) **Omniscience hallucination 93%** — the second‑worst in this queue after gpt‑oss‑120b (90.8%); (b) Design Arena 1126 is text→code, not vision input — Kimi's multimodal 66 already discounts this correctly; (c) 1M window is a hard structural fact, so full Context band credit applies with an LCR‑measured penalty, not a floor collapse.
- Revisit trigger: none — legacy model superseded by the Gemini 3.x Flash line.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
