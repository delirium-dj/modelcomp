# Qwen 3.5 35B — findings by Flint

- Source: Qwen Team / Alibaba (`qwen/qwen3.5-35b-a3b`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B
- **Short description:** Alibaba's **February 2026 open-weight mixture-of-experts** foundation model — **36B total / 3B active** parameters (A3B), **Apache 2.0**, multimodal reasoning model (text + image + video in → text out) with thinking and non-thinking modes, positioned for cheap always-on multimodal agents.
- **Provider / access:** Open-weight (Hugging Face `Qwen/Qwen3.5-35B-A3B`, Apache 2.0). Hosted via OpenRouter (`qwen/qwen3.5-35b-a3b`), DeepInfra, SiliconFlow, Alibaba Cloud Model Studio, Novita; **not on OpenCode Zen** (no Free ID exists). Served through OpenAI-compatible **Chat Completions** API endpoints.
- **Release / knowledge:** Released **February 2026** (Qwen3.5 family); open-weight. Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-35b-a3b` (OpenRouter); HF `Qwen/Qwen3.5-35B-A3B`.
- **Context window:** **262,144 native** tokens; extensible to **~1,010,000** via YaRN RoPE scaling (not native); **65,536 max output** (32,768 recommended; 81,920 for complex math/competition problems).
- **Modalities:** Text + image + video in → text out; reasoning yes (thinking default, Instruct via `enable_thinking: False`); tool calls yes (function calling, BFCL-V4, JSON mode); web search **NOT supported**; URL context **NOT supported**; no audio input.
- **Pricing (as of 2026-10-29):** Hosted **$0.14/$1.00** per 1M tokens (OpenRouter), **$0.25/$2.00** (Alibaba Cloud Model Studio); self-host **$0** (Apache 2.0 weights).
- **Architecture:** Open-weight **MoE** — 36B total / 3B active (A3B); Apache 2.0.

### Raw benchmarks found

> Official scorecard numbers come from the Qwen Team model card (`huggingface.co/Qwen/Qwen3.5-35B-A3B` benchmark table, corroborated by DeepInfra serving notes and llm-stats). Independent signals: Artificial Analysis Intelligence Index, DeepInfra serving figures, BenchLM, FitMyLLM Arena. No neutral third-party SWE-harness row (Vals/swebench.com) was located for this exact size.

Agent / tool use:

- BFCL-V4 (tool calling): **67.3** — Qwen scorecard (HF eval results).
- TAU2-Bench: **81.2** — Qwen scorecard (HF eval results).
- Terminal Bench 2: **40.5** — Qwen scorecard (HF eval results).
- Terminal-Bench Hard: **26.5%** — DeepInfra/Requesty independent.
- SWE-bench Verified: **69.2%** — Qwen scorecard (HF eval results); benchgap estimate corroborates.

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (Qwen scorecard, HF model card, thinking; HF eval 85.35); **84.5%** (DeepInfra/Requesty independent; benchgap AA-GPQA); **81.9%** (older Artificial Analysis comparison).
- HLE: **no verified public score found** for this ID (benchgap AA-HLE estimate **21.0** — flagged provisional, not adopted).
- Artificial Analysis Intelligence Index / BenchLM overall: **19.3** (AA Intelligence Index v5.0, best run `qwen/qwen3.5-35b-a3b`, since 2026-10-28; deprecated → successor Qwen3.6 35B A3B); **45.2/100** (BenchLM, #122/1002); FitMyLLM Arena Elo **1485**.
- IFEval: **91.9**; LongBench v2: **59.0**; MMLU-Pro: **85.3** — Qwen scorecard.

Coding:

- SWE-bench Verified: **69.2%**; LiveCodeBench v6: **74.6%**; TIR-Bench: **55.5%**; V*: **92.7%** — Qwen scorecard.

Long context:

- LongBench v2: **59.0** — Qwen scorecard.
- MRCR / RULER: no verified public score found for this ID.

### Cross-source comparison

- Official (Qwen Team HF model card / Qwen3.5 blog, re-reported by DeepInfra and llm-stats) vs independent (Artificial Analysis Intelligence Index, DeepInfra serving figures, BenchLM, FitMyLLM Arena): direction consistent for the capability anchors (GPQA Diamond ~**84–85**, SWE-bench Verified **69.2**, LiveCodeBench v6 **74.6**), but the current Artificial Analysis Intelligence Index v5.0 (**19.3**, best run `qwen/qwen3.5-35b-a3b`, since **2026-10-28**, deprecated → Qwen3.6 35B A3B successor) sits far below the superseded comparison-page figures (Intelligence **30.7**, Coding **16.8**, GPQA **81.9**) — read as a methodology reset, not a capability collapse; both dated readings retained with sources.

### Normalized scores (1–100)

- **Tool use: 66/100.** BFCL-V4 **67.3** (tool calling) and TAU2-Bench **81.2** (agentic) show real tool capability; SWE-bench Verified **69.2%** confirms tool-augmented coding; Terminal Bench 2 **40.5** / Terminal-Bench Hard **26.5%** cap the agentic ceiling mid — mid-band open-weight tool use, not frontier.
- **Reasoning: 70/100.** GPQA Diamond **84.2%** (Qwen card, thinking) / **85.35%** (HF eval) / **84.5%** (independent) is strong for the tier; MMLU-Pro **85.3**, IFEval **91.9**, LiveCodeBench v6 **74.6** support it; HLE unverified and the AA Intelligence Index **19.3** (v5.0) mid-low → mid-band, below the proprietary frontier reasoning band (GPQA 90%+, HLE 40%+).
- **Context window: 78/100.** Verified **262,144 native** → lands in the 200K–500K band (**65–84**, 200K = 70 anchor); the ~**1,010,000** figure is a YaRN RoPE extension, not native, so not credited at the 1M tier; retrieval at length not verified.
- **Multimodal: 80/100.** Text + image + video in → text out (vision-capable per the Qwen team card; web search / URL context **NOT supported**; no audio in); reasoning + tool use yes — scored at the video-inclusive modality tier.
- **Coding: 70/100.** SWE-bench Verified **69.2%** and LiveCodeBench v6 **74.6%** (vendor scorecard, benchgap-corroborated) are solid mid-pack open-weight numbers; Terminal Bench 2 **40.5** / TIR-Bench **55.5%** cap the agentic-coding edge — below the frontier band (DeepSWE 74%+ → 90–100).
- **Cost efficiency: 97/100.** Hosted **$0.14/$1.00** per 1M (OpenRouter), **$0.25/$2.00** (Model Studio); self-host **$0** (Apache 2.0) — near-top cost-efficiency tier for an open-weight reasoning/coding model.

- **Overall Score: 73/100.** Mean of the five quality dims: (66 + 70 + 78 + 80 + 70) / 5 = **72.8** → **73** (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-29
- Method: public web research prioritizing official model card/docs (Qwen Team Hugging Face `Qwen/Qwen3.5-35B-A3B` card + Qwen3.5 blog) plus independent benchmarks/reviews (Artificial Analysis Intelligence Index, DeepInfra serving figures, BenchLM, FitMyLLM Arena) — official-first with independent benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_35B_A3B.md`, using the same headings.
