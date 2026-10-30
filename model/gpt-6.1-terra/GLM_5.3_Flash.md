# GPT-6.1 Terra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6.1-terra`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra (hyphenated vendor style; mid-tier model of the GPT-6.1 series, below GPT-6.1 Sol)
- **Short description:** OpenAI's cost-intelligence frontier model for computer use and high-volume workday tasks: screenshot/on-screen understanding, precise desktop action, clear natural writing, and strongly improved factuality at half the price of GPT-5.6 Terra and GPT-6.1 Sol. Not the family's complex-coding flagship — Sol and Astra remain better there, by OpenAI's own statement.
- **Provider / access:** OpenAI API as `gpt-6.1-terra` (OpenRouter `openai/gpt-6.1-terra`); ChatGPT Work and Codex for all Plus, Pro, Enterprise, and Edu plans. Chat Completions/Responses per OpenAI API convention.
- **Release / knowledge:** 2026-10-26 release (OpenRouter release date; OpenAI launch post "starting today"); knowledge cutoff not stated in the launch post.
- **IDs:** `openai/gpt-6.1-terra` (OpenAI API), `openai/gpt-6.1-terra` (OpenRouter) — no Free ID exists on Zen
- **Context window:** not published in OpenAI's launch post; OpenRouter lists a 1.1M-token context for the GPT-6.1 series entry (partially verified — aggregator only)
- **Modalities:** text + image/screenshot input (visual reasoning core: MMMU-Pro, technical drawings, on-screen content), text output; computer use (desktop agents); web search tool ($10/1k calls). Reasoning effort levels incl. low/medium/xhigh/max (AA evaluated all). No audio input documented.
- **Pricing (as of 2026-10-30):** $1.00/Mtok input, $0.05/Mtok cached input, $1.25/Mtok cache write, $5.00/Mtok output (OpenAI launch post + OpenRouter) — 50% below GPT-5.6 Terra and GPT-6.1 Sol ($2/$10); GPT-6 Astra sits at $10/$50. AA cost per task: $0.40 at max effort (vs $1.40 for GPT-5.6 Terra).
- **Architecture:** proprietary, closed weights; parameters undisclosed. Meets the **Critical** threshold in cybersecurity under OpenAI's Preparedness Framework; carries GPT-6 Astra's protections; strong prompt-injection resistance per the system card (deploymentsafety.openai.com/gpt-6-1-terra).

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam (professional computer-use tasks): medium effort **+15 points over GPT-5.6 Terra at ~1/3 the cost**; on par with GPT-6 Astra at 1/10 its per-token price; at max effort >3× as token-efficient as Claude Opus 5.5 at 1/4 its per-token price → **~9× lower cost per task** (OpenAI launch post)
- OSWorld 2.1: medium effort **surpasses GPT-5.6 Terra's best score** at a fraction of the cost per task (OpenAI)
- Terminal-Bench 4.0: **50.3% at max effort** (OpenAI; more than double GPT-5.6 Terra's published 21.5%) — mid-tier among frontier agents (Kimi K3.1 Pro 67.2%, Opus 5 51.8% on the same-generation sets)
- Terminal-Bench-Science 0.1: max effort **surpasses GPT-6.1 Sol at lower cost**, within 5 points of Opus 5.5 at less than one-fifth the estimated cost (OpenAI)
- Speed: completes tasks **over 3× faster** than both GPT-6 Astra and GPT-6.1 Sol (OpenAI)
- Artificial Analysis Coding Agent Index v2.0: **48** (GPT-6.1 Sol 54, GPT-6 Luna 31; xhigh and low effort sit on the cost frontier — AA)
- OSWorld-Verified / Tau2 / GDPval-AA: no individual public values found for this ID

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: max effort **+6 over GPT-5.6 Terra at less than a third of the cost per task**; lower efforts gain 7–13 points; low/medium effort are Pareto-optimal for intelligence vs cost; max effort sits **4 points below GPT-6.1 Sol** and 10 above GPT-6 Luna (AA). Absolute Index value not printed in the article excerpt found; derived from Sol's ≈52 (v4.3.2) → Terra ≈ 48 at max (derived estimate, labeled)
- Factuality (OpenAI internal error-inducing prompts): error rate at low effort fell **53.6% → 16.7%** vs GPT-5.6 Terra; at max effort **4.3%** (−18 points), nearly matching GPT-6 Astra and GPT-6.1 Sol
- AA-Omniscience: hallucination rate **down 50 points** vs GPT-5.6 Terra with accuracy **+2** — simultaneously more correct and less hallucination-prone (AA)
- MMMU-Pro (visual reasoning): outperforms GPT-5.6 Terra at every reasoning setting; nearly matches GPT-6 Astra and GPT-6.1 Sol (OpenAI)
- GPQA Diamond / HLE / CritPt / SciCode / AA-LCR: no individual public values found for this ID

Coding:

- Terminal-Bench 4.0: **50.3%** (max effort)
- Terminal-Bench-Science 0.1: within 5 points of Opus 5.5 at <1/5 the cost (OpenAI)
- AA Coding Agent Index v2.0: **48** (−6 vs GPT-6.1 Sol)
- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench: no verified public score found
- OpenAI's positioning: "For the most complex coding tasks, GPT-6.1 Sol and GPT-6 Astra remain the better choice"

Long context:

- 1.1M tokens listed by OpenRouter (series entry); no MRCR/RULER retrieval figure published — no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 82/100.** Agents' Last Exam parity with GPT-6 Astra at 1/10 price, OSWorld 2.1 gains over GPT-5.6 Terra, and TB-Science near Opus 5.5 make it a top value-per-action agent; TB4.0 at 50.3% and the mid AA Coding Agent Index (48) keep it under the long-horizon specialists.
- **Reasoning: 79/100.** Derived AA Index ≈ 48 at max (4 under Sol) with an exceptional 4.3% error rate at max effort and a 50-point hallucination drop — factuality-forward mid-frontier reasoning.
- **Context window: 92/100.** 1.1M tokens per OpenRouter but absent from OpenAI's own launch post — high-tier window, partially verified; no retrieval data published.
- **Multimodal: 82/100.** Image/screenshot understanding is the core competency (MMMU-Pro near Astra/Sol; drawings, video-editing and form tasks) with computer use; no audio/video/PDF input documented and text-only output.
- **Coding: 80/100.** TB4.0 50.3% (max) and a strong TB-Science 0.1 result at very low cost; explicitly not the complex-coding choice of the family (Sol/Astra), AA Coding Agent Index 48.
- **Cost efficiency: 88/100.** $1/$5 with $0.05 cached input and $0.40 per AA task at max effort — the cheapest per-task frontier-family model measured this cycle; Pareto-optimal at low/medium effort per AA.
- **Overall Score: 83/100.** Mean of the five quality dims (82+79+92+82+80)/5 = 83.0. Best fit: high-volume computer-use automation, document/form workflows and factual writing at the lowest cost per task in its class; weak fit for frontier-complex coding (use Sol/Astra) and for self-hosting (proprietary).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-30
- Method: public internet research — OpenAI launch post (openai.com) and community announcement, OpenAI system card reference, Artificial Analysis cost-efficiency article, OpenRouter pricing/provider page, Activepieces coverage; the derived AA Index (~48) and the OpenRouter-only 1.1M context figure are labeled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
