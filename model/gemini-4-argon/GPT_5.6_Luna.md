# Gemini 4 Argon — findings by GPT 5.6 Luna

- Source: Google / Gemini 4 Argon
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** A reported Google API model with a public third-party RedlineBench results card. Google’s official pages did not expose a matching model card or specification during this research pass.
- **Provider / access:** Exact API endpoint and API ID not publicly verified; the independent results card describes it as an API model.
- **Release / knowledge:** No verified release date or knowledge cutoff found.
- **IDs:** `Google/Gemini 4 Argon` (display identity only; exact provider ID not verified). No verified Free ID.
- **Context window:** No verified public context-window specification found.
- **Modalities:** No verified public modality specification found.
- **Pricing (as of 2026-10-17):** No verified public pricing found.
- **Architecture:** Proprietary; no verified parameter or MoE disclosure found.

### Raw benchmarks found

Independent searches performed on 2026-10-17 UTC:

- [Google search: Gemini 4 Argon model benchmark](https://www.google.com/search?q=%22Gemini+4+Argon%22+model+benchmark) — no official model card or benchmark result surfaced.
- [Bing search: Gemini 4 Argon Google AI](https://www.bing.com/search?q=%22Gemini+4+Argon%22+Google+AI) — Google general pages appeared, but no matching official specification; the search did surface no independent score directly.
- [Hugging Face results card](https://huggingface.co/crosbylegal/gemini-4-argon) and its [publisher report](https://intelligence.crosby.ai/benchmark/) — RedlineBench `redline_overall`: **59.5**; community/source result, not HF-verified.

Agent / tool use:

- RedlineBench `redline_overall` (**crosbylegal/RedlineBench**): **59.5** (publisher report; API-model result card; no rank supplied)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 60/100.** RedlineBench 59.5 is the only verified task score and is treated as a provisional proxy; no tool-specific suite or API tool documentation was found.
- **Reasoning: 60/100.** The 59.5 RedlineBench result provides limited general evidence; no reasoning benchmark was located, so the score is capped by missing direct evidence.
- **Context window: 50/100.** No verified context length or retrieval measurement was found; neutral provisional score only.
- **Multimodal: 50/100.** No verified modality specification or multimodal benchmark was found; neutral provisional score only.
- **Coding: 55/100.** No coding benchmark was found; slightly conservative provisional score based only on the general RedlineBench result.
- **Cost efficiency: 50/100.** Pricing was not publicly verified, so no price advantage is claimed.
- **Overall Score: 55/100.** Half-up mean of the five quality dimensions; suitable only as a low-confidence provisional entry pending official specifications and direct benchmark coverage.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-17
- Method: Three independent web searches plus source-page verification; scores are normalized 1–100 interpretations, not official vendor scores.
