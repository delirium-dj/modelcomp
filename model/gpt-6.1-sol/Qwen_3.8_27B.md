# GPT-6.1 Sol — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (OpenAI mid-tier GPT-6 reasoning model; "max" effort variant as default for AA measurements)
- **Short description:** OpenAI's updated Sol-tier model, launched 29 Sep 2026 at DevDay to replace GPT-6 Sol after 7 days. Positioned below flagship GPT-6 Astra; OpenAI claims near-Astra performance on agentic coding, computer use and professional work at ~1/5 the token price. Now the default model in Codex.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses, Chat Completions, Batch; tool calling via Responses API), ChatGPT Work, Codex, GitHub Copilot, OpenRouter `openai/gpt-6.1-sol`, Vercel AI Gateway. 6 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30 (OpenAI model reference, verified 30 Sep 2026)
- **IDs:** `openai/gpt-6.1-sol` (OpenAI API and OpenRouter, same ID). No Free ID found on OpenCode Zen; scored on paid OpenAI API pricing.
- **Context window:** 1,050,000 total tokens (922,000 max input / 128,000 max output — OpenAI model reference via Codersera guide, 30 Sep 2026; Artificial Analysis rounds to 1M)
- **Modalities:** Text + image in; text out. No audio or video in/out (OpenAI docs via Codersera: "the model does not accept or produce audio or video"). Reasoning: yes (efforts low/medium(high is default none-supported)/high/xhigh/max; `none` not supported). Tool calls: yes (Responses API). Built-in tools: web search, file search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, tool search.
- **Pricing (as of 2026-09-30, paid):** $2.00 in / $10.00 out / $0.10 cached input / $2.50 cache write per 1M. Above 272K input tokens the whole request bills at 2x input / 1.5x output ($4 in / $15 out). Batch and Flex = half standard; Fast mode = 2x ($4/$20). No free tier found.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count. Tier 1 rate limit 500 RPM / 500K TPM.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 offline (computer use): **71.4%** (max effort) — OpenAI launch chart, figures via Vellum/llm-stats; Astra 73.5%, GPT-6 Sol 64.4%
- AutomationBench 1.0.6 (business workflows): **35.4%** (medium effort) — OpenAI claim, via Vellum/DataCamp (Sonnet 5.5 ~44.7%, Opus 5.5 ~33.2%)
- GDP.pdf (document analysis, all-pass): **32.0%** — OpenAI/Surge AI, via Vellum
- Terminal-Bench Science 0.1: **more than 2x GPT-6 Sol** (relative, no absolute published) — OpenAI, via The Decoder; Astra 68.1% (max)
- Terminal-Bench 4.0: **+12 vs GPT-6 Sol** (relative, AA) — no verified public absolute score found
- GDPval-AA v2.1: **+5 vs GPT-6 Sol** (relative, AA) — no verified public absolute score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Factual error rate (low effort, lower is better): **7.7%** — OpenAI, via TechCrunch (GPT-6 Sol: 11.4%)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (peer GPT-6 Astra: 96.0% per llm-stats)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **52 / #11 of 223** (max effort; v4.3.2, median 26; 51 at xhigh) — Artificial Analysis, independent
- Omniscience Accuracy / Hallucination Rate: hallucination rate **54%** (down from GPT-6 Sol's 60%) — AA-Omniscience; accuracy index value not publicly itemized

Coding:

- DeepSWE v1.1 (real-repo coding): **75.2%** (high effort) — OpenAI chart, figures via Vellum; statistically ties Astra (74.8%), +6.4 over GPT-6 Sol (68.8% max)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no standalone verified public score found (component of AA index only)
- Vibe Code Bench: no verified public score found
- HealthBench Consensus / Professional / overall: **96.0% / 64.2% / 58.5%** — llm-stats, 30 Sep 2026

Long context:

- No long-context retrieval (MRCR/RULER/GraphWalks) reported at window length; 1.05M window with 272K pricing threshold (AA context-window chart not publicly itemized)

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 2.0 at 71.4% (max) nearly ties the 73.5% frontier of GPT-6 Astra, AutomationBench 35.4% beats Opus 5.5, and it leads its own family by +12 on Terminal-Bench 4.0; capped below the 90+ band because no absolute TB2.1/Tau3/GDPval-AA numbers are published and LLM-Stats' tool-use index places it at #47.
- **Reasoning: 80/100.** AA Intelligence Index 52 (#11/223) is ~1 point behind Astra and ahead of every mid-tier rival, with a low 7.7% factual error rate; capped because the AA-Omniscience hallucination rate is still 54% and it trails Opus 5.5 (58) / Sonnet 5.5 (56) on the independent aggregate.
- **Context window: 95/100.** 1.05M total (922K in / 128K out) lands in the >=1M tier (95–100); no 512K+ retrieval measurement published, so it does not reach 100.
- **Multimodal: 65/100.** Text + image in, text out (no audio/video), mid of the 60–70 "+image in" band; strong document reasoning (GDP.pdf 32%) keeps it above the floor.
- **Coding: 92/100.** DeepSWE v1.1 at 75.2% is at/above the 74%+ frontier reference and statistically ties Astra at ~1/5 the per-task cost (~$1.50 vs ~$7.70); no SWE-bench Verified/LiveCodeBench numbers to cross-check cap it slightly below the top band.
- **Cost efficiency: 78/100.** Paid $2/$10 (cached $0.10) sits between the ~88 band of $1.25/$4.25 and the ~60 band of $3/$15; $0.72 per AA Intelligence Index task (vs $3.26 for Astra) is a strong Pareto point, but there is no free tier.
- **Overall Score: 82.8/100.** Mean of (82 + 80 + 95 + 65 + 92)/5 = 82.8. Best fit: high-volume agentic coding/computer-use and document work where per-task cost matters — the default Codex model for a reason; route the hardest long-horizon science/computer steps or top aggregate-reasoning needs to GPT-6 Astra or Claude Opus 5.5.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, llm-stats comparison, OpenAI model reference/pricing via Codersera 30 Sep 2026 guide, OpenRouter model docs, Vellum/The Decoder/TechCrunch/DataCamp/VentureBeat coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
