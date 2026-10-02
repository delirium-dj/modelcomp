# GPT-OSS 120B — findings by Qwen 3.8 Flash

- Source: OpenAI (`openai/gpt-oss-120b`; Apache 2.0 open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's 2025-era open-weight 120B MoE — the first Apache 2.0 model from OpenAI. Once a notable open-release event, **2026 measurements show it well behind current open peers** (GLM, Qwen, Kimi, Mimo) on agentic, knowledge, and long-context dimensions. **AA-Omniscience hallucination rate 90.8%** is catastrophic. GPQA 78.2, HLE 19.6, AA Index 11.6, APEX 3.1% — a model superseded within months by the open-source ecosystem it was meant to seed.
- **Provider / access:** open weights (Apache 2.0); hosted at OpenRouter and many providers; OpenAI-compatible serving.
- **Release / knowledge:** 2025-era; cutoff not verified.
- **IDs:** `openai/gpt-oss-120b`; curated `opencode/gpt-oss-120b`.
- **Context window:** **128K tokens** (BenchLM). Curated `meta.json` agrees.
- **Modalities:** **Text in / text out** (BenchLM classifies as "non-reasoning base"); tool calls; JSON. Design Arena 979 is text→code, not vision input. Curated "Text in/out" is correct.
- **Pricing (as of 2026-10-02):** open weights → self-host (runs on commodity hardware with quantization); hosted rates vary across providers. Cost excluded from Overall.
- **Architecture:** open-weight MoE ~120B (Apache 2.0); active params not independently verified.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM scorecard, 2026-09-24). BenchLM coverage: full AA panel available. The standout negative is Omniscience hallucination 90.8%.

Agent / tool use:

- τ²-bench: **65.8%** (BenchLM) — reasonable
- GDPval-AA: **745 Elo** (4.8% normalized); AA Agentic Index: **6.2%** (near-floor); APEX-Agents-AA: **3.1%** (near-floor); Gert Labs: 29.6%
- Terminal-Bench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.2%** (AA) — mid-tier for 2026
- HLE: **19.6%** — well below 40% frontier bar
- CritPt: **1.1%** — near-floor
- **AA-Omniscience Index: −49.2; accuracy 21.8% / hallucination 90.8%** — catastrophic; fabricates 9 out of 10 times on knowledge probes
- AA-LCR: **52.0%**; AA-IFBench: **69.0%**
- AA Intelligence Index: **11.6**; BenchLM overall **37.76 / #121 of 507**

Coding:

- React Native Evals: **71.6%** (one useful row)
- AA-SciCode: **34.0%**; AA Coding Index: **30.4** (very low)
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- AA-LCR 52.0% within 128K; no MRCR/RULER rows.

Multimodal:

- Design Arena: 979 (text→website code); no vision input benchmarks. Text-only per methodology.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. The Omniscience 90.8% hallucination is the defining negative signal.

- **Tool use: 55/100.** τ² 65.8% is respectable for a static eval. But AA Agentic Index 6.2% and APEX 3.1% are near-floor — it cannot operate as a generalist agent. GDPval 745 is very low. Kimi 52.
- **Reasoning: 50/100.** GPQA 78.2 is mid-band (below 80+ threshold). But HLE 19.6, CritPt 1.1%, and especially **Omniscience −49.2 / 90.8% hallucination** make this model dangerous for knowledge work. AA Index 11.6 confirms bottom-tier reasoning. Kimi 55; the hallucination pulls me to 50.
- **Context window: 52/100.** 128K = 100K–200K band (50–64); AA-LCR 52.0% is measured and maps to the band's lower half. Kimi 50.
- **Multimodal: 15/100.** Text in/out; Design Arena 979 is text→code. Kimi gave 30 (slight Design Arena credit); methodology says text-only = 10–20. Scored 15.
- **Coding: 50/100.** React Native 71.6% is one useful data point. AA Coding Index 30.4 is very low; SciCode 34.0%. No SWE-V/LCB. Kimi 52.
- **Cost efficiency: 92/100.** Apache 2.0 open weights at 120B run on quantized single-GPU setups; free self-host. Cost excluded from Overall.
- **Overall Score: 44/100.** Mean of Tool 55, Reasoning 50, Context 52, Multimodal 15, Coding 50 = 222/5 = 44.4 → **44**. Best fit: **fine-tuning substrate and offline self-hosted baseline** — historically important as OpenAI's first Apache 2.0 release, but the 90.8% hallucination rate, AA Index 11.6, and APEX 3.1% confirm this is no longer a viable production model in late 2026. Superseded by GLM/Qwen/Mimo open models at similar cost. Between Kimi's 48 and honest discount for the hallucination crisis.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM full panel. Curated `meta.json` is a placeholder template (correct on 128K/text-only). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **Omniscience 90.8% hallucination** is the worst measured in this batch of queue reports, (b) AA Index 11.6 and Agentic Index 6.2% confirm bottom-tier general capability, (c) Design Arena 979 is text→code, not vision — Kimi's 30 for multimodal was generous.
- Revisit trigger: none — legacy model superseded by the open-source ecosystem; historical baseline reference only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
