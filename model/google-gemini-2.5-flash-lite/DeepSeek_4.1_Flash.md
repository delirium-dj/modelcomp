# Google Gemini 2.5 Flash Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`opencode/google-gemini-2.5-flash-lite`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite (no Free-tier wording; it is the cheapest paid tier of the 2.5 family)
- **Short description:** The fastest and lowest-cost model of Google's 2.5 generation, built for high-volume translation, classification and extraction. Vercel's gateway summary markets it for "high-throughput agentic pipelines", but the published agentic scores put it far below the 2.5 Flash tier, and it is now three Flash generations behind Gemini 3.8 Flash.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI) and OpenCode Zen as `opencode/google-gemini-2.5-flash-lite`; Vercel AI Gateway exposes it as `google/gemini-2.5-flash-lite` over Chat Completions, Responses, Anthropic Messages and the AI SDK. Proprietary, no open weights.
- **Release / knowledge:** Public preview 2025-06-17; stable/GA 2025-07-22 (Google Developers Blog, Logan Kilpatrick). Knowledge cutoff not restated in the sources checked.
- **IDs:** `google/gemini-2.5-flash-lite` (Google / AI Gateway), `opencode/google-gemini-2.5-flash-lite` (OpenCode Zen). No Free ID found on any route.
- **Context window:** 1,000,000 tokens input with a 66K max output (AI Gateway provider rows; Google's GA post confirms the 1M window). The repo's curated `meta.json` records a 128K Zen cap — the live vendor and gateway rows are the 1M figure.
- **Modalities:** text, image, audio, video and document/PDF input; text out; thinking/reasoning yes and configurable across four levels; native tools include Google Search grounding, code execution and URL context. No image generation.
- **Pricing (as of 2026-09-27):** $0.10 / 1M input, $0.40 / 1M output, $0.01 / 1M cached read; audio input priced 40% below the preview launch; Search grounding billed separately (~$35 / 1K requests). Paid only, no free tier.
- **Architecture:** proprietary and undisclosed by Google; this dataset's entry is the OpenCode Zen packaging of Google's model, which is the same underlying model as the preview alias.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function-Calling Leaderboard V4: **36.9%** (rank 50 of 98)
- BFCL v3 Multi-Turn: **13.5%**; Galileo Agent Leaderboard: **0.47** (rank 8 of 22)
- Tau3-Banking / Tau2-Bench Telecom: **19.0%** (rank 262 of 332); Terminal-Bench Hard: **4.5%** (rank 207 of 326)
- GDPval-AA: **321 Elo** (rank 280 of 340); TRAP (task completion + privacy resistance): **31.2**
- MCP-Bench: **0.6** (rank 11 of 20); VerdictBench: **52.9%**; OmniGAIA: **8.6%**; Omni-DeepSearch: **2.2%**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (rank 252 of 464); MMLU-Pro: **75.9%** (rank 156 of 312); HLE: **6.8%** (rank 234 of 466)
- Artificial Analysis Intelligence Index: **11.41** (rank 252 of 418); CAIS Text Capabilities Index: **5.1** (rank 41 of 41); Epoch Capabilities Index: **111.18** (rank 196 of 398)
- ObviousBench: **88.2%**; SycoEval-EM: **88.0%** (rank 2 of 19); LisanBench: **122.33**; MedCode: **27.1%**
- Hallucination / factuality: Vectara HHEM **96.7%** factual consistency (98th percentile, rank 3 of 85); Alignment DVMap: **45.3%**
- CritPt / Omniscience Accuracy as separate headline metrics: **no verified public score found**

Multimodal:

- Audio: SpeakerSleuth **55.3%** (rank 9 of 21), AGL1K **1687.97** (rank 9 of 19), HearSay **22.9%**; InfiniteBM text games: Hold'em **1684.29 Elo** (rank 1 of 20), Liar's Dice **1380.31 Elo**
- Image/video/MMMU-class scores for this exact model: **no verified public score found** (Google documents multimodal input; no vision benchmark number was located)

Coding:

- SciCode: **19.3%** (rank 353 of 458); MedCode: **27.1%**; AGIEval-style code tasks: **no verified public score found**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench / Terminal-Bench 2.1 coding: **no verified public score found**
- Speed/price as the design goal: **0.2 s p50 TTFT** and **446 tokens/s p50 throughput** on gateway traffic, at $0.10 / $0.40 per 1M

Long context:

- AA-LCR (long-context reasoning): **56.3%** (rank 161 of 409), i.e. roughly the 60th percentile — the only long-context evidence found, and noticeably short of what a 1M window implies
- Beyond Static Dialogues long-term-memory probe: **16.0%**; no MRCR / RULER / GraphWalks value found

### Normalized scores (1–100)

- **Tool use: 38/100.** BFCL-V4 36.9%, BFCL v3 multi-turn 13.5%, τ²-bench Telecom 19.0%, Terminal-Bench Hard 4.5% and GDPval-AA 321 Elo (rank 280 of 340) all sit at or below the mid-band floor — this is a pipeline model, not an agent.
- **Reasoning: 52/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% keep it inside the mid band, but HLE 6.8% and an Intelligence Index of 11.41 (rank 252 of 418) are well below it, and it ranks last of 41 on CAIS's text-capability index — so it lands just under the mid tier rather than in it.
- **Context window: 95/100.** A documented 1M-token window with a 66K output ceiling and $0.01 / 1M cached reads is a strong context-per-dollar offer; AA-LCR 56.3% is the reason it is not the 98% retrieval tier.
- **Multimodal: 88/100.** Text, image, audio, video and PDF input in one call with live audio benchmarks (AGL1K 1687.97, SpeakerSleuth 55.3%) justifies the audio-input band; it is held a notch below 90 because output is text-only and no vision benchmark exists for this exact variant.
- **Coding: 45/100.** SciCode 19.3% (rank 353 of 458) is the only published coding number and no SWE-bench-class result exists; Google claims cross-category coding gains over 2.0 Flash-Lite, which is consistent with a light-task agent but not with repo-scale work.
- **Cost efficiency: 94/100.** $0.10 / 1M input and $0.40 / 1M output with $0.01 / 1M cached reads is near the bottom of the price ladder (the $0.10/$0.20 tier scores 97–99); only a genuinely free tier would push it to 100.
- **Overall Score: 63.6/100.** (38 + 52 + 95 + 88 + 45) / 5 = 63.6. Best fit: very high-volume, latency-sensitive translation, classification and multimodal document extraction where no tool use or repo-scale coding is required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (Google Developers Blog GA post, Vercel AI Gateway model/provider rows, BenchmarkList consolidated eval record). **Re-verified 2026-09-27:** the OpenCode Zen free-tier/privacy list (page dated 2026-09-28) still shows **no free variant** for this model — the only Zen free IDs are Big Pickle, MiMo-V2.6-Flash Free, MiMo-V2.5 Free, Ling 3.0 Flash Fin Free, Nemotron 3 Ultra Free, Nemotron 3.5 Lightning Free and Muse Spark 1.3 Contributor Free — confirming the "paid only, no Free ID" finding; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
