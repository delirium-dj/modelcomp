# Gemini 4 Argon — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model for real-world coding, enterprise knowledge work and cyber defense — the first Gemini with a codename instead of Pro/Flash/Flash-Lite tiers, headlined by a 1M-token output limit.
- **Provider / access:** At launch (2026-09-30) limited to trusted cyber defenders via the Fairwind Program; paid API customers and Google AI Ultra subscribers follow (no date). Absent from OpenRouter/Vertex/Cursor at launch (DataCamp). Model card: `deepmind.google/models/model-cards/gemini-4-argon/`.
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not published. Part of the U.S. government voluntary pre-release review.
- **IDs:** `google/gemini-4-argon` (no published API model ID at launch; no free Zen ID).
- **Context window:** 1,000,000-token **output** limit (up from 64,000) — the headline spec. Google does **not** state an input context window; some outlets report 1M input but NeuralTrust could not trace it to a Google source (treat input window as unconfirmed).
- **Modalities:** text + image + video in, text out; LVBench 91.7% (long video understanding); reasoning yes (High/max effort settings); tool calls yes; up to 1M-token single responses for huge code migrations.
- **Pricing (as of 2026-10-20):** $2 / 1M input, $10 / 1M output introductory; $4 / $20 standard; cached input $0.10 intro / $0.20 standard (95% cache discount). Artificial Analysis measured $1.99 cost per average task (cheapest of the frontier trio).
- **Architecture:** proprietary (closed weights); verbose — used 110M tokens to run the AA index vs an 82M median.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** vendor-reported (behind Opus 5.5 66.4%; AA independent run 57.1%)
- AutomationBench: **51.3%** (leads; vs Opus 5.5 42.5%, per MarkTechPost)
- Harvey's Legal Agent: **19.6%** (leads by a wide margin — Astra 5.4%, Fable 5.1 6.7%, Opus 5.5 3.8%)
- CWE-bench v1 (patching): **68.0%** (ties Astra 68.0%, ahead of Opus 5.5 67.0%)
- GDPval-AA / Tau-Bench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52.6** (independent; behind Opus 5.5 57.6, ~level with Astra 52.7)
- Humanity's Last Exam: **57.1%** (Artificial Analysis independent, High setting; Opus 5.5 61.4%)
- Vals Index: **68.9%** — **#1 of 41 models** (vendor-reported / Vals AI)
- Hallucination rate **15%** / factual accuracy **50%** (The Decoder; low hallucination but middling accuracy); Arena.ai Text Arena **#1 at 1525**
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE v1.1 (long-horizon SWE): **77.9%** vendor-reported (best in table; Opus 5.5 74.2%, Astra 74.1%)
- FrontierSWE v2: **55.0%** (behind Astra 65.5% by 10.5 pts, Opus 5.5 62.3%)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- GraphWalks (256K–1M): **84.2%** (leads — Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%)
- LVBench (long video): **91.7%**

> Provenance: no third party had reproduced Google's vendor table at launch (DataCamp); AA tested only the High setting. Vendor and independent rows are labelled above and should not be silently merged.

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads AutomationBench 51.3%, Harvey's Legal 19.6% and CWE-bench 68.0%; capped by Terminal-Bench 4.0 57.4% trailing Opus 5.5's 66.4% (terminal/large-codebase agent work is its weak spot).
- **Reasoning: 89/100.** #1 Vals Index 68.9% and #1 Text Arena (1525) with a low 15% hallucination rate, but AA Intelligence Index 52.6 and HLE 57.1% sit behind Opus 5.5 and factual accuracy is only 50%.
- **Context window: 97/100.** 1M-token output limit (far beyond rivals' 128K) plus best-in-class GraphWalks 84.2% at 256K–1M; a hair off 100 because the input window is officially unstated.
- **Multimodal: 92/100.** LVBench 91.7% long-video understanding and native text/image/video input; capped by the absence of a broad image-in benchmark (MMMU-Pro / Chartography).
- **Coding: 92/100.** Best-in-table DeepSWE v1.1 77.9% and #1 Vals Index; held below the ceiling by FrontierSWE v2 55.0% (10.5 pts behind Astra) and vendor-only provenance.
- **Cost efficiency: 90/100.** $2/$10 intro and the cheapest measured cost per task ($1.99 vs Opus 5.5 $5.98); not higher because verbosity (110M tokens/index run) and the pending standard-rate increase eat into the saving.
- **Overall Score: 92/100.** Mean of Tool 90 + Reasoning 89 + Context 97 + Multimodal 92 + Coding 92 = 92.0. Best fit: long, document-heavy legal/finance research agents and very large code migrations that exploit the 1M-output window — evaluate with your own guardrails; terminal-based coding agents still favor Opus 5.5.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (NeuralTrust's Gemini 4 Argon benchmark/pricing/security analysis compiling Google's announcement, DataCamp, MarkTechPost, Artificial Analysis, Vals AI, The Decoder, Trending Topics); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
