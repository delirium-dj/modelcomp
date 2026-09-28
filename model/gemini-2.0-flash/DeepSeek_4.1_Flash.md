# Gemini 2.0 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (historical entry; no Free-tier wording)
- **Short description:** Google's February 2025 second-generation workhorse: a natively multimodal Flash model with a 1M-token window, native tool use and a very low price. It has been shut down upstream and survives in this dataset as the 2.0-generation reference point.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI). The vendor model list now shows "Gemini 2.0 Flash (Shut down)" and directs users to newer models; the repo's curated `meta.json` records a 2026-06-01 shutdown. Proprietary, no open weights.
- **Release / knowledge:** Released/GA 2025-02-05. Knowledge cutoff not disclosed in the sources checked.
- **IDs:** `google/gemini-2.0-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens input (vendor) with an ~8K max output — the small output ceiling, not ingestion, is the practical limit for generation.
- **Modalities:** text, image, audio and video input; text output plus experimental native image output at launch (the repo's `meta.json` records "text, image out"); native tool use; no reasoning-effort control.
- **Pricing (as of 2026-09-27):** historical Google AI Studio list $0.10 / 1M input, $0.40 / 1M output (audio input $0.70); Vertex AI $0.15 / $0.60. The model is shut down, so these are reference rates rather than usable ones.
- **Architecture:** proprietary and undisclosed; a dense "Flash" workhorse of the 2.0 generation, one generation ahead of 2.0 Flash-Lite and two to three behind the current 3.x Flash line.

### Raw benchmarks found

Figures come from two third-party consolidated runs (Sophon, 21 evals across 9 domains; BenchGecko, 20 benchmarks) — separate harnesses, so each number is quoted with its tracker.

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **29.5%** (Sophon)
- Terminal-Bench Hard: **3.8%** (Sophon); BenchGecko agentic category index: **11.4** (rank 34 globally)
- DABstep (data-agent tasks): **9.8%** (Sophon)
- Claw-Eval / ClawProBench / Toolathon / GDPval-AA / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.3%**; MMLU-Pro: **77.9%**; HLE: **4.3%** (all Sophon)
- MATH-500: **93.0%** (Sophon — its best reported score); MATH level 5: **82.2%** (BenchGecko)
- AIME 2024: **33.0%**; AIME 2025: **21.7%**; OTIS Mock AIME: **31.0%** (Sophon / BenchGecko)
- ARC-AGI-2: **1.3%**; SimpleBench: **17.3%**; HELM WildBench: **80.0%**; HELM Omni-MATH: **45.9%** (BenchGecko)
- BenchGecko category index: knowledge **66.3** (rank 34 globally), language **84.1** (rank 37), reasoning **32.9**; HELM IFEval: **84.1%**; Chatbot Arena Elo: **1360**
- Artificial Analysis Intelligence Index / CritPt / MRCR: **no verified public score found**

Multimodal:

- Vendor-documented text, image, audio and video input, plus image output at launch; no MMMU / Video-MME / audio benchmark number for this exact model was located, so the multimodal score rests on the documented modality matrix rather than measured accuracy.

Coding:

- SWE-bench Verified: **44.2%** (Sophon, scaffolded agent run)
- LiveCodeBench: **33.4%**; SciCode: **33.3%**; LiveBench Coding: **53.1** (Sophon)
- Aider Polyglot: **22.2%** (Sophon) / **38.2** (BenchGecko — different harness); WeirdML: **25.8**; BenchGecko coding category index: **31.3** (rank 136 globally)
- DeepSWE / SWE-bench Pro / Vibe Code Bench / Terminal-Bench 2.1: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks recall value exists for the 1M window; the long-context score therefore reflects the documented window size only, not measured retrieval.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 29.5% and DABstep 9.8% are mid-band-class, but Terminal-Bench Hard 3.8% and an agentic index of 11.4 (rank 34 of tracked models) put it well under the tool-use mid tier despite documented native tool calling — this was never an agent model.
- **Reasoning: 58/100.** GPQA Diamond 62.3% and MMLU-Pro 77.9% sit inside the mid band (GPQA 60–80%), but HLE 4.3%, ARC-AGI-2 1.3% and a reasoning index of 32.9 hold it at the bottom edge of that band rather than above it.
- **Context window: 95/100.** A 1M-token input window at $0.10 / 1M input is the headline capability of this generation; the ~8K output ceiling and the total absence of recall benchmarks are why it is not at the 100 ceiling.
- **Multimodal: 88/100.** Text, image, audio and video input in one call plus image output at launch covers the broadest modality matrix of its generation; no vision/audio benchmark exists for the model and generation was experimental, so it stays just below the 90+ band.
- **Coding: 45/100.** SWE-bench Verified 44.2% on a scaffolded run is respectable, but LiveCodeBench 33.4%, SciCode 33.3%, Aider Polyglot 22.2% and a coding index of 31.3 (rank 136) show it cannot carry repo-scale work — fine for snippets and web tasks, not for agentic engineering.
- **Cost efficiency: 93/100.** $0.10 / 1M input and $0.40 / 1M output was aggressively cheap for a 1M-window multimodal model (the $0.10/$0.20 tier scores 97–99) and it would have gone higher if the endpoint were still live; the shutdown and the $0.70 audio-input rate cost it the rest.
- **Overall Score: 66.2/100.** (45 + 58 + 95 + 88 + 45) / 5 = 66.2. Best fit: a historical benchmark for cheap mass multimodal ingestion and translation; for new work the current Flash-Lite/Flash tier matches or beats it at the same price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (Sophon and BenchGecko consolidated eval records, Google's Gemini model list confirming shutdown, repo `meta.json` for curated pricing/modality fields). **Re-verified 2026-09-27:** Google's live deprecations table no longer carries an active 2.0-generation row for this model, consistent with the recorded 2026-06-01 shutdown (the 2.0 rows sit in the already-shutdown block), and the entry remains a historical reference; no benchmark figure changed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
