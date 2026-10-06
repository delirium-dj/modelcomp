# GLM 5.3 FlashX — findings by DeepSeek 4.1 Flash

- Source: Z.ai/GLM-5.3-FlashX (`glm-5.3-flashx`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** The high-speed serving variant of Z.ai's GLM-5.3-Flash — same 320B/18B native-multimodal weights, retuned for up to 200 tokens/s interactive agent and coding work. Not a separate open-weight checkpoint; capability equals GLM-5.3-Flash, latency and price are the differentiators.
- **Provider / access:** Z.ai BigModel (`glm-5.3-flashx`); also on OpenRouter `z-ai/glm-5.3-flashx`, Vercel AI Gateway, and OpenCode (`opencode/glm-5.3-flashx`). OpenAI-compatible Chat Completions API with streaming, tool calls, structured output, and context caching. Not yet on the GLM Coding Plan as of the 2026-09-18 launch test.
- **Release / knowledge:** 2026-09-18 (FlashX serving tier; GLM-5.3-Flash base released 2026-08-26). Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.ai BigModel), `z-ai/glm-5.3-flashx` (OpenRouter)
- **Context window:** 1,048,576 (1M) total; up to 128K max output (Z.ai docs; OminiGate lists 131.1K). Verified against Z.ai developer docs and OpenRouter model listing.
- **Modalities:** Text, image, video, and files in; text out. Reasoning (thinking always enabled), tool calls, JSON/structured output, context caching.
- **Pricing (as of 2026-10-06):** $0.37 / $1.25 per 1M input/output on Z.ai/OpenRouter; $0.09 per 1M cached input. Roughly 2.5x standard GLM-5.3-Flash ($0.15/$0.50) — the premium buys serving speed, not new intelligence.
- **Architecture:** 320B total / 18B active parameters, hybrid sparse + linear attention (first open-source frontier model combining both) with IndexPool, mHC, 30T-token multimodal corpus; 3.0x less attention compute and 4.4x smaller KV cache than GLM-5.3. Weights not released for FlashX (serving SKU).

### Raw benchmarks found

> FlashX shares the GLM-5.3-Flash capability stack; vendor numbers below are for the Flash/FlashX family (Z.ai model card, verified 2026-08-27/09-18). Independently, Artificial Analysis revised its index downward after launch — both readings listed.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai official; vs Claude Opus 4.8 85.0, GPT-5.6 Terra 87.4 — near-frontier, vendor-run)
- AutomationBench: **48.8** (Z.ai model card; vs GLM-5.2 26.2)
- Z.ai Code Bench v1.0 (max effort): **29.0** (vendor-authored; vs Opus 4.8 29.5 — marketing-grade)
- Claw-Eval / GDPval-AA / Toolathon: no verified public score found for this exact ID
- Benchable independent suite: General Knowledge **100%**, Reasoning **100%**, Instruction Following **78.0%**, Email Classification **99.0%**, non-hallucination **98.0%**, reliability **100% success across 8 benchmarks** (Benchable, 2026-09-18)

Reasoning / knowledge:

- HLE (with tools): **55.3%** (Z.ai model card; no comparison set)
- OfficeQA Pro: **62.4%** (Z.ai; document/visual reasoning)
- Artificial Analysis Intelligence Index: **57** at launch (Z.ai/AA, 2026-08-27); later revised to **41.8** on OpenRouter's AA panel, LLMBase shows **44.8** — version drift, treat 41.8–57 as the band
- Coding Index **71.5**, Agentic Index **50.9** (OpenRouter AA snapshot, 2026-10-05)
- GPQA Diamond / LCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai; vs GLM-5.2 46.2)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Benchable independent Coding accuracy: **97.0%** (97th percentile), Mathematics **97.0%** (96th percentile)

Long context:

- 1M-token window advertised with hybrid linear+sparse attention and IndexPool compression; no published MRCR/RULER/GraphWalks retrieval accuracy at 800K+ was found — long-context quality at the extreme is unmeasured.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 84.3 and AutomationBench 48.8 place it just behind Opus 4.8 on the load-bearing agentic benchmarks; capped by a vendor-run comparison set and the absence of independent GDPval/Claw-Eval numbers.
- **Reasoning: 84/100.** AA Intelligence Index 41.8–57 with HLE-with-tools 55.3 and perfect Benchable knowledge/reasoning accuracy; capped by version drift in the independent index and no GPQA Diamond figure.
- **Context window: 95/100.** A true 1,048,576-token window with 128K max output earns the top tier, but no published retrieval-accuracy evidence at 512K+ keeps it below a full 100 (compression trades precision for cost).
- **Multimodal: 83/100.** Native text/image/video/file input (trained on a 30T-token multimodal corpus) with text-only output; no audio-in and no non-text generation caps it in the video/PDF band.
- **Coding: 87/100.** DeepSWE 63.4, Coding Index 71.5, and 97.0% Benchable coding accuracy are strong but below the DeepSWE 74%+/TB2.1 85%+ frontier ref; the vendor's own Code Bench is discounted.
- **Cost efficiency: 94/100.** $0.37/$1.25 sits just under the ~$0.60/$2.20 ≈ 92 band and is ~2.5x standard Flash; the speed premium is real but the underlying $0.045/task AA cost makes it an efficient interactive tier.
- **Overall Score: 87/100.** Mean of the five quality dims (88+84+95+83+87)/5 = 87.4 → 87. Best-fit: latency-sensitive multimodal coding/agent work where a near-frontier model at ~2.5x standard Flash pricing still beats paying flagship rates.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-06
- Method: public internet research (Z.ai developer docs, OpenRouter, Benchable, LLMBase, Build Fast with AI, GLM5.app, OminiGate, ApX, LLM Lineage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
