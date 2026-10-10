# GPT 5 Nano — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5 Nano
- **Short description:** The smallest of OpenAI's three GPT-5 API sizes (Aug 2025) — a fast, low-cost reasoning model for latency- and cost-sensitive tasks; weaker than gpt-5/mini on coding and agentic work but with surprisingly strong math and long-context Q&A per-token economics.
- **Provider / access:** OpenCode Zen `opencode/gpt-5-nano` via `https://opencode.ai/zen/v1/responses` (paid, $0.05/$0.40); OpenAI Responses API + Chat Completions API (a $0.025/$0.200 route also visible per BenchLeader); default in Codex CLI for lightweight tasks; also Azure AI Foundry / GitHub Copilot.
- **Release / knowledge:** Released 2025-08-07 (OpenAI "Introducing GPT-5 for developers"); knowledge cutoff: not stated on the dev page (GPT-5 family cutoffs published in the research blog).
- **IDs:** `opencode/gpt-5-nano` (Zen, paid); `gpt-5-nano` (OpenAI). Non-reasoning ChatGPT variant is `gpt-5-chat-latest` (different model).
- **Context window:** 272,000 input tokens max + 128,000 reasoning & output tokens = 400,000 total (verified via OpenAI dev post and BenchLeader 400k); Zen prices to 272K tier.
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`: `minimal`/`low`/`medium` default/`high`; verbosity `low`/`medium`/`high`); parallel tool calling; custom tools (plaintext + CFG-constrained); structured outputs; prompt caching; Batch API; built-in tools (web search, file search, image generation)
- **Pricing (as of 2026-10-09):** Paid — $0.05 / 1M input, $0.40 / 1M output (blended $0.138/M per BenchLeader; $0.025/$0.200 route seen; OpenRouter history now $0.055/$0.440), cache read $0.005. Batch API discount available. Output speed 72 tok/s (OpenRouter median; slower than most), first token 1.9s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. BenchLeader flags the model stale — no new benchmark result in six months.

### Raw benchmarks found

> OpenAI launch tables (high effort) + BenchLeader effort sweep citing Epoch/AA/Vals boards (data as of 2026-10-10). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **11.5%** (tbench.ai, medium) / **21.8%** (not-stated — fills the previously-missing TB row; weak); Terminal-Bench Hard (AA): 12.1–17.4%
- Tau2-bench telecom (OpenAI launch): **35.5%**; τ²-Bench Telecom (AA): 36.5%; retail (OpenAI): **62.3%**; airline: **41.0%**
- BFCL Overall: **51.5%** #22 (Berkeley — fills the previously-missing BFCL row)
- GDPval-AA / Claw-Eval: no verified public score found
- COLLIE (instruction following): **96.9%** (launch — corroborated); Scale MultiChallenge: 54.9%

Reasoning / knowledge:

- GPQA Diamond: **69.4%** (Epoch, high — fills the previously-missing independent GPQA; OpenAI launch 71.2%, AA 67.6%, Vals 63.4% — four readings in the 63–71 band)
- HLE: **8.7–9.5%** (AA — corroborates the launch 8.7; very weak)
- ARC-AGI-2 (verified): **2.6%** #174 (ARC Prize — fills; very weak); ARC-AGI-1: 20.7% #195; CritPt: **0.0%**
- FrontierMath Tiers 1–3: **20.0%** #84 (Epoch v2 — fills); Tier 4: 2.4%; AIME (Vals): **81.2%** (fills; corroborates the launch 85.2%); OTIS Mock AIME: 81.1%; MATH Level 5: **95.2%** #13; MATH 500: 93.8% #15; MGSM 89.3%
- AA-LCR: **45.0%** (AA — fills the previously-missing LCR; weak); LMCA: 7.9%
- Artificial Analysis Intelligence Index v4.3.2: **13.0** (AA, high — fills the previously-missing index; very low); Epoch ECI: **139.4** #112; BenchLeader Index: **55.9 ±9.5** #206 (not-stated best, stale data)
- SimpleQA Verified: **11.7%**; MMLU-Pro (Vals): **76.1%**; MedQA (Vals): **93.3%**; HELM MMLU-Pro 77.8% #26; HELM IFEval **93.2%** #4; HELM WildBench **80.6%** #30
- AA-Omniscience: non-hallucination **41.0–47.4%** at high/medium (poor-moderate)
- Hallucination proxies (OpenAI): LongFact-Concepts 1.0%, FActScore 7.3%

Coding:

- SWE-bench Verified (swebench.com bash-only): **34.8%** #37 (medium — fills the previously-missing independent SWE-V row; corroborates the launch 54.7% as scaffold-dependent)
- LiveCodeBench: **70.2%** #86 (Vals — fills the previously-missing LCB)
- Aider polyglot (diff): **48.4%** (launch); WeirdML: 38.1%; ALE-Bench: 718.7; LMArena Coding: 1385
- SWE-Lancer IC SWE Diamond: **$49K** earned (launch); SciCode: no verified public score found

Long context:

- OpenAI-MRCR 2-needle: **43.2%** @128K / **34.9%** @256K (launch — measured); Graphwalks bfs <128k: 64.0%; BrowseComp LC: 80.4% @128K; AA-LCR **45.0%** (fills); Fiction.LiveBench 120k: 21.9% — all weak-to-mid; 400K total window

Multimodal / vision:

- MMMU (launch): **75.6%**; MMMU-Pro (Vals): **70.9%** (fills the independent vision row); AA-MMMU-Pro 61.0%; CharXiv 62.7%; VideoMMMU 66.8%; VideoMME 65.7%; ERQA 50.1%; LMArena Vision: 1159

### Normalized scores (1–100)

- **Tool use: 52/100.** The filled TB 11.5–21.8% (tbench.ai) is very weak, BFCL 51.5% (#22) is respectable and Tau2 retail 62.3% solid but airline/telecom lag badly; COLLIE 96.9% shows excellent instruction following — low-mid band, down from the old 55.
- **Reasoning: 60/100.** GPQA 63.4–71.2% (four readings), AIME (Vals) 81.2% and MATH-500 93.8% are strong for the class; HLE 8.7–9.5%, ARC-AGI-2 2.6%, CritPt 0.0%, AA Index 13.0 and FrontierMath 20.0% cap hard-research depth.
- **Context window: 66/100.** 272K input / 400K total (200K–500K tier) but measured needle retrieval is weak (MRCR 2-needle 43.2% @128K, 34.9% @256K; AA-LCR 45.0%; Fiction.LiveBench 21.9%) — below the 70 baseline.
- **Multimodal: 68/100.** Image input with measured MMMU-Pro (Vals) 70.9%, MMMU 75.6% and video scores (VideoMMMU 66.8%), text output only → top of the +image-in 60–70 band.
- **Coding: 54/100.** SWE-bench Verified 34.8% (swebench.com bash-only — filled, weak) vs the launch's 54.7% (scaffold-dependent), Aider 48.4% and the filled LCB 70.2% are mid-low; no SciCode numbers.
- **Cost efficiency: 97/100.** $0.05/$0.40 per 1M (blended $0.138/M, $0.025/$0.200 route seen; OpenRouter history $0.055/$0.440) — cheaper input than the ~$0.10/$0.20 = 97–99 reference; cache read $0.005. Paid, so short of $0 = 100.
- **Overall Score: 60/100.** Mean of the five quality dims (52 + 60 + 66 + 68 + 54) / 5 = 60.0. Best fit: high-volume, low-latency tasks (classification, extraction, lightweight chat) where its price/performance dominates — not for serious coding or agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader effort-sweep tables data as of 2026-10-10 citing Epoch/AA/Vals/HELM boards + the official OpenAI developer blog — official plus independent sources, conflicts compared); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 69.4% (independent), TB 11.5/21.8%, BFCL 51.5%, ARC-AGI-2 2.6%, AA Index 13.0, SWE-V (swebench) 34.8%, LCB 70.2%, MMMU-Pro (Vals) 70.9%, AA-LCR 45.0%, MRCR rows — Tool 55→52, Reasoning 62→60, Context 68→66, Coding 56→54, Overall 62→60.
- Future sources: add a new file next to this one, e.g. `GPT_5.1.md`, using the same headings.
