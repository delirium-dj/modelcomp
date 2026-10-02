# Space Bunny Alpha — findings by Qwen 3.8 27B

- Source: undisclosed (stealth)/Space Bunny Alpha (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny` on Space Bunny API)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (anonymous stealth preview model; free preview pricing)
- **Short description:** An anonymous (provider-undisclosed) reasoning model released as a public preview in September 2026, built for long-context reasoning, multimodal understanding, structured output, and agent workflows. Community fingerprinting suggests a DeepSeek-V4-style reasoning signature, with MiniMax-family and GPT-OSS hypotheses also in play — none confirmed.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (listed 23 Sep 2026) and Space Bunny API `https://spacebunny.app/api/v1` (OpenAI-compatible chat completions, model ID `space-bunny`).
- **Release / knowledge:** Public preview, September 2026; knowledge cutoff not disclosed (stealth model).
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter); `space-bunny` (Space Bunny API).
- **Context window:** 1,000,000 tokens total; up to 524,288 completion tokens (official model snapshot, GitHub `spacebunny-app/space-bunny-alpha-benchmark` + spacebunny.app docs).
- **Modalities:** Text/image/video in; text out (JSON object mode supported); reasoning on with five effort levels (`low`/`medium`/`high`/`xhigh`/`max`); tool calls (function calling, app-side validation); JSON mode.
- **Pricing (as of 2026-09-29):** $0 per 1M input and output tokens (free preview, subject to account and rate limits, per provider listing / kilo.ai listing); Space Bunny credit packs $9.90/100K, $99/1M, $999/11M permanent credits. Speed: OpenRouter P50 87 tok/s, P50 latency 1.07 s, 94.98% 3-day inference availability (OpenRouter snapshot 24 Sep 2026).
- **Architecture:** Undisclosed — parameters, weights, training details, and provenance not public; provider states prompts may be retained but not used for training (Stealth Model Terms).

### Raw benchmarks found

Agent / tool use:

- AI BENCHY (independent run, 24 Sep 2026, high reasoning; aibenchy.com/model/stealth-space-bunny-alpha-high/ via spacebunnyalpha.com): **7.0/10** — 12/22 tests fully passed, 62.1% attempt pass rate, avg response 27.38 s; categories: tool calling 10.0/10, data parsing/extraction 10.0/10, puzzle solving 8.3/10, coding 6.2/10, instruction following 6.2/10, general intelligence 4.2/10, trivia 3.0/10; consistency 8.5/10, API reliability 10.0/10. Same suite: GPT-6 Sol 6.0 9.9, GPT-5.5 9.3, Qwen3.8-27B 8.4, MiniMax M3 7.5, gpt-oss-120b 6.1.
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.0%** (standardized 60-question subset, independent eval published by spacebunnyalpha.com, checked 24 Sep 2026; references: GPT-6 Sol 95.45%, GPT-5.5 93.6%, MiniMax M3 92.9%, Qwen3.8-27B 89.2%, gpt-oss-120b 80.1%)
- HLE: **46.1%** (300-question subset of the original HLE dataset, ~95% CI 40.4–51.8%, 7 unscored; reference: GPT-5.6 Sol 49.5%, GPT-6 Sol 47.9%, GPT-5.5 45.8%, MiniMax M3 39.0%)
- MMLU-Pro: **75%** (independent multiple-choice accuracy run; references: GPT-5.6 Sol 89.1%, Qwen3.8-27B 84.3%, gpt-oss-120b 80.8%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA row as of 29 Sep 2026)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- AI BENCHY coding category: **6.2/10** (from the run above; closest available coding signal)

Long context:

- 3/3 distinct hidden codes recovered in order in a single 200K-token run (200,044 local tokens; independent OpenCode Go test, `majiayu000/stealthprint` case-space-bunny.md)
- Token efficiency: ~67% fewer output tokens than Qwen3.8 Flash on the same benchmark runs (305,989 vs 913,989 output tokens, spacebunnyalpha.com)
- No MRCR / RULER numbers reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Verified 10/10 tool calling and 10/10 extraction in the independent AI BENCHY run plus 10/10 API reliability, but no Terminal-Bench/Tau3/GDPval agent numbers exist to confirm, so capped below frontier.
- **Reasoning: 85/100.** HLE 46.1% is within ~3.4 pp of the GPT-5.5 reference (45.8%) and far above MiniMax M3 (39.0%); GPQA subset 82.0% and MMLU-Pro 75% sit below the Qwen3.8-27B references (89.2%/84.3%); capped by subset-only evaluation.
- **Context window: 95/100.** 1M window verified with 524K completion ceiling and a verified 3/3 retrieval run at ~200K tokens; no measured 512K+ retrieval, so not the top of the 95–100 tier.
- **Multimodal: 80/100.** Verified text + image + video input with text output; video support is route-dependent per docs, which keeps it in the 75–90 video-in band rather than above.
- **Coding: 62/100.** Only the AI BENCHY coding category (6.2/10) is verified; no SWE-bench/LiveCodeBench/SciCode numbers found, and the strong repository-scale coding claims are vendor/community assertions without public evals.
- **Cost efficiency: 100/100.** $0/1M input and output on the free preview tier (time-limited, provider-retention caveat applies).
- **Overall Score: 80/100.** Mean of the five quality dims (78+85+95+80+62)/5 = 80.0; best fit: huge free context + verified tool use + solid reasoning for long-document and repo-scale review, while coding depth stays unproven.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (spacebunnyalpha.com independent field guide checked 24–29 Sep 2026, aibenchy.com run pages, official GitHub repo spacebunny-app/space-bunny-alpha-benchmark, Hugging Face community article 2026-09-27, OpenRouter snapshot, stealthprint case notes); scores are normalized 1–100 interpretations, not official vendor scores.
