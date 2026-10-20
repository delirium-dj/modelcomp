# Gemini 3.8 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-tier "workhorse" model — best reasoning and coding of the Flash line at the same speed and introductory price as 3.7 Flash, built for long-horizon coding and autonomous agents. Distinct from the cybersecurity-tuned `gemini-3.8-flash-cyber` (separate folder); both share the same foundational intelligence.
- **Provider / access:** Gemini API (Google AI Studio, Android Studio), Google Antigravity, Stitch, Gemini Enterprise; consumers via Google AI Pro/Ultra. OpenRouter `google/gemini-3.8-flash`.
- **Release / knowledge:** Released 2026-09-02 (third Flash release in six weeks, three weeks after 3.7 Flash); knowledge cutoff not published.
- **IDs:** `google/gemini-3.8-flash` (no free Zen ID confirmed; introductory price expires 2026-12-31).
- **Context window:** 1,000,000 tokens (Gemini 3.x Flash-line API standard; not restated in the launch post — treat as provisional for this exact SKU).
- **Modalities:** text + image (+ audio/video in per Gemini line) in, text out; reasoning yes (variable effort levels, "works harder" at higher effort); tool calls yes (iterative tool calling); image-gen via Nano Banana companion, not native text-out image.
- **Pricing (as of 2026-10-20):** $0.75 / 1M input, $3.75 / 1M output (introductory; same as 3.7 Flash, expires 2026-12-31).
- **Architecture:** proprietary (closed weights); accelerated by long-running agentic loops that recursively evaluate and refine the model.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1 (Long-Horizon Software Engineering): **outperforms most larger frontier models** end-to-end at a fraction of the cost (Google chart; exact % not stated in the post text — provisional)
- Vals Finance Agent V2: **outperforms 3.7 Flash and other frontier models** (Google chart; exact value not stated in text)
- Harvey's Legal Agent Benchmark: **outperforms 3.7 Flash and other frontier models** (Google chart; exact value not stated in text)
- Terminal-Bench / Tau-Bench / GDPval-AA: no verified public score found for the base Flash SKU

Reasoning / knowledge:

- HLE-Verified: **54.9%** (multi-step reasoning across STEM, humanities and professional fields)
- GPQA Diamond: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- DeepSWE v1.1: leads most larger frontier models (see Agent; no exact % in post text)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for 3.8 Flash specifically (third-party coverage cited a 73.7% figure on an unnamed web/SEO build benchmark — unverified, not counted)

Long context:

- 1M-token window (Flash-line standard); no MRCR/RULER figure published in the launch post — "no long-context retrieval reported".

> Note: CyberGym, CWE-Bench 47.2% pass@1 and the >70% internal 20-language vulnerability-discovery figures belong to **Gemini 3.8 Flash Cyber** (Fairwind Program), not the base Flash — recorded under `model/gemini-3.8-flash-cyber/`, never merged here.

### Normalized scores (1–100)

- **Tool use: 88/100.** Agent-first design with iterative tool calling, leading DeepSWE v1.1 and top finance/legal agent benchmarks; capped because Google published chart-only results (no exact tool-use percentages) for the base SKU.
- **Reasoning: 89/100.** HLE-Verified 54.9% is strong for a Flash-tier model and it beats 3.7 Flash on multi-step domain reasoning; held below the frontier Pro/Opus class and by absent GPQA.
- **Context window: 95/100.** 1M-token Flash-line window; slightly discounted because the exact figure is not restated for this SKU and no long-context retrieval benchmark was published.
- **Multimodal: 90/100.** Native Gemini multimodality (text/image/audio/video in) demonstrated building 3D/visual interactive apps; capped as no vision-specific benchmark (MMMU-Pro, Chartography) was reported.
- **Coding: 90/100.** "Best reasoning and coding model yet" for the Flash line, DeepSWE v1.1 ahead of most larger frontier models at a fraction of the cost; capped by the absence of a hard SWE-bench Verified / LiveCodeBench number.
- **Cost efficiency: 92/100.** $0.75/$3.75 introductory pricing with frontier-approaching capability is excellent value; not 100 because it is a paid tier (not $0) and the intro price expires.
- **Overall Score: 90/100.** Mean of Tool 88 + Reasoning 89 + Context 95 + Multimodal 90 + Coding 90 = 90.4 → 90. Best fit: cost-efficient long-horizon coding and autonomous agents where Flash-tier speed and price matter more than absolute frontier accuracy.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Google's official "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber" blog post; OpenRouter listing for pricing/ID); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
