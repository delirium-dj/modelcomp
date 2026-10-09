# GPT-5.4 Mini — findings by Claude Opus 5

- Source: OpenAI (`gpt-5.4-mini`, benchmarked snapshot `gpt-5.4-mini-2026-03-17`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini (OpenAI styles it "GPT‑5.4 mini" with a lowercase tier suffix)
- **Short description:** OpenAI's strongest small model as of March 2026 — GPT-5.4's capabilities compressed into a tier that runs **more than 2× faster** than GPT-5 mini and approaches full GPT-5.4 on SWE-Bench Pro and OSWorld-Verified. Explicitly designed for a **subagent** topology: in Codex, GPT-5.4 handles planning and final judgment while delegating parallel subtasks — codebase search, large-file review, document processing — to GPT-5.4 Mini ([OpenAI, 2026-03-17](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)). Distinct model, not an alias; `gpt-5.4`, `gpt-5.4-pro` and `gpt-5.4-nano` are separate SKUs with their own folders.
- **Provider / access:** OpenAI API (**Responses API** style), Codex (app, CLI, IDE extension and web), and ChatGPT. Also OpenCode Zen as `gpt-5.4-mini` on `https://opencode.ai/zen/v1/responses` ([Zen docs](https://opencode.ai/docs/zen/)). API feature surface is unusually complete for a small model: **text and image input, tool use, function calling, web search, file search, computer use, and skills**.
- **Release / knowledge:** Released **2026-03-17**, alongside GPT-5.4 nano. The benchmarked snapshot is `gpt-5.4-mini-2026-03-17`. Knowledge cutoff: no verified public date found.
- **IDs:** `gpt-5.4-mini` (OpenAI API), `opencode/gpt-5.4-mini` (Zen). **Free-route nuance worth correcting:** this folder's `meta.json` sets `noFreeId: true`, which is right for the API and for Zen — but OpenAI states GPT-5.4 Mini **is available to ChatGPT Free and Go users** via the "Thinking" option in the + menu, and serves as the rate-limit fallback for GPT-5.4 Thinking for everyone else. So there is a genuine free *consumer* route, just no free *developer* ID.
- **Context window:** **400,000 tokens** (OpenAI, stated directly). Max output **128,000 tokens** per this repo's curated metadata — OpenAI's launch post does not state an output ceiling, so that figure is second-hand and flagged. See the long-context section: the advertised window and the measured one diverge sharply.
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: yes, with `reasoning_effort` sweepable **low → xhigh** (all benchmark figures below are xhigh unless noted). Tool calls: yes, plus computer use — OpenAI specifically highlights interpreting "screenshots of dense user interfaces".
- **Pricing (as of 2026-10-08):** **$0.75 / MTok input, $4.50 / MTok output** (OpenAI); **$0.075 / MTok cached input** (Zen). Two additional economics worth recording: in **Codex it consumes only 30% of the GPT-5.4 quota**, i.e. roughly one-third the cost for simpler tasks; and OpenAI's own latency/cost analysis is explicitly caveated as simulated offline rather than measured in production.
- **Architecture:** Proprietary, closed weights. Parameter count, distillation method and activation scheme undisclosed. OpenAI's only architectural statement is positional — it is "the smallest, cheapest" tier below full GPT-5.4 but above nano — plus the Codex subagent composition pattern.

### Raw benchmarks found

> Unusually strong evidence base: OpenAI published a four-model comparison table **with values** (GPT-5.4 / 5.4 mini / 5.4 nano / GPT-5 mini) across six categories including a full long-context section, and Vals AI and Artificial Analysis independently measured the same snapshot. Where both exist, both are given. All OpenAI figures are at `xhigh` reasoning effort except OmniDocBench, which OpenAI deliberately ran at effort `none`.

Agent / tool use:

- **τ²-bench (telecom): 93.4%** (OpenAI; GPT-5.4 98.9%, GPT-5 mini 74.1%)
- **OSWorld-Verified: 72.1%** (OpenAI; GPT-5.4 75.0%, GPT-5 mini 42.0%) — within 3 points of the full-size model, and a 30-point jump over the previous mini
- **Terminal-Bench 2.0: 60.0%** (OpenAI; GPT-5.4 75.1%); independently **Terminal-Bench 2.1: 54.7%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17))
- **MCP Atlas: 57.7%** (OpenAI; GPT-5.4 67.2%)
- **Toolathlon: 42.9%** (OpenAI; GPT-5.4 54.6%)
- GDPval-AA: **1095 Elo** / **25.8%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-mini))
- APEX-Agents-AA: **28.2%**; AA Agentic Index: **19.6%** (Artificial Analysis) — the two aggregate agentic indices are far weaker than the task-level results
- Claw-Eval / BrowseComp: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 88.0%** (OpenAI; GPT-5.4 93.0%). Independently **87.5%** (Artificial Analysis) and **83.1%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)) — a 4.9-point spread across three harnesses
- **HLE: 28.2% without tools, 41.5% with tools** (OpenAI; GPT-5.4 39.8% / 52.1%). Independently **AA-HLE 28.1%** — a 0.1-point match with OpenAI's no-tools figure, which is about as good as vendor-vs-independent agreement gets
- MMLU-Pro: **84.6%** (Vals AI)
- AA-LCR: **77.0%**; AA-IFBench: **73.3%** (Artificial Analysis)
- ARC-AGI-1: **63.70%**; ARC-AGI-2: **18.9%** ([ARC Prize leaderboard](https://arcprize.org/leaderboard))
- CritPt: **10.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **24.1**; BenchLM overall **53.83/100, rank #69 of 889** ([BenchLM](https://benchlm.ai/models/gpt-5-4-mini), 37 of 625 benchmarks — well covered)
- AA-Omniscience: Index **−18.9**, Accuracy **37.5%**, **Hallucination Rate 90.2%**
- FrontierMath v2: Tiers 1–3 **28.28%**, Tier 4 **2.08%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Coding:

- **SWE-Bench Pro (Public): 54.4%** (OpenAI; GPT-5.4 57.7%, GPT-5 mini 45.7%) — within 3.3 points of the full model, which is the launch's headline claim and it holds up
- SWE-bench Verified: **73.0%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17))
- LiveCodeBench: **81.5%** (Vals AI)
- Vibe Code Bench: **47.97%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — notable because this harness returned near-zero for the entire Grok family and 0.40% for Gemini 2.5 Pro; GPT-5.4 Mini actually functions inside it
- AA-SciCode: **52.1%**; AA Coding Index: **56.1%** (Artificial Analysis)
- FrontierCode 1.1 Main: **27.0%** ([Cognition](https://cognition.com/blog/frontier-code-1.1)) — the weakest coding datapoint by a wide margin

Multimodal:

- **MMMU-Pro: 76.6%**, **MMMU-Pro with Python: 78.0%** (OpenAI; GPT-5.4 81.2% / 81.5%). Independently **AA-MMMU-Pro 73.3%**
- **OmniDocBench 1.5, no tools, overall edit distance (lower is better): 0.1263** (OpenAI; GPT-5.4 0.109, GPT-5 mini 0.1791) — run at `reasoning_effort: none` to reflect low-cost operation, which makes the result more impressive rather than less
- OSWorld-Verified 72.1% doubles as screenshot-grounded vision evidence
- No video, audio, MathVision or CharXiv number found

Long context:

- **OpenAI MRCR v2, 8-needle, 64K–128K: 47.7%** (GPT-5.4 86.0%, GPT-5 mini 35.1%)
- **OpenAI MRCR v2, 8-needle, 128K–256K: 33.6%** (GPT-5.4 79.3%, GPT-5 mini 19.4%)
- **Graphwalks BFS, 0K–128K: 76.3%** (GPT-5.4 93.1%)
- **Graphwalks parents, 0–128K (accuracy): 71.5%** (GPT-5.4 89.8%)
- AA-LCR: **77.0%**
- This is the most complete long-context disclosure of any model in this research pass, and it is **self-damaging in a way that deserves credit for honesty**: OpenAI published that its own 400K-window model retrieves only 47.7% of 8 needles at 64–128K and **33.6% at 128–256K**, roughly 40–46 points behind full GPT-5.4 at the same depths.

### Normalized scores (1–100)

- **Tool use: 76/100.** The strongest small-model tool profile I have assessed: **τ²-bench 93.4%** is near-saturated, **OSWorld-Verified 72.1%** lands within 3 points of full GPT-5.4 and 30 points above GPT-5 mini, and Terminal-Bench 2.0 60.0% is independently corroborated at 54.7% on the harder 2.1 harness. The API surface — computer use, web search, file search, skills — is real rather than aspirational. Capped by MCP Atlas 57.7% and Toolathlon 42.9% (both ~10–12 points behind the full model), and by aggregate indices that tell a harsher story: AA Agentic Index 19.6%, APEX-Agents 28.2%.
- **Reasoning: 76/100.** GPQA Diamond 88.0% with independent confirmation at 87.5%, and an **HLE no-tools figure of 28.2% that Artificial Analysis reproduced at 28.1%** — a 0.1-point agreement that is the best vendor-vs-independent match in this entire pass and materially raises my confidence in OpenAI's whole table. AA-IFBench 73.3% is strong. Capped by ARC-AGI-2 18.9%, CritPt 10.0%, FrontierMath Tier 4 2.08%, an AA Intelligence Index of 24.1, and a **90.2% hallucination rate** against 37.5% accuracy.
- **Context window: 68/100.** This is a case where real measurement forces the score *down*, and I would rather be accurate than generous. The advertised window is **400K**, which on raw size would earn high-70s to 80s — but OpenAI itself published that 8-needle MRCR retrieval is **47.7% at 64–128K and 33.6% at 128–256K**. A model that loses two-thirds of an 8-needle retrieval task before it even reaches 256K does not have a usable 400K window, whatever the spec sheet says. Graphwalks BFS 76.3% and AA-LCR 77.0% show the first 128K is genuinely fine, which is what the score reflects.
- **Multimodal: 72/100.** Text and images in, text only out. Within vision it is excellent for the tier: MMMU-Pro 76.6% (73.3% independently), 78.0% with Python, OSWorld-Verified 72.1% on dense UI screenshots, and an **OmniDocBench 1.5 edit distance of 0.1263 achieved at zero reasoning effort** — genuinely good document OCR at minimum cost. Capped by the structural absence of audio, video and generated media, and by every figure trailing full GPT-5.4 by 3–5 points.
- **Coding: 75/100.** The claim OpenAI led with is the one that survives scrutiny: **SWE-Bench Pro 54.4% against the full model's 57.7%** — a 3.3-point gap at roughly a fifth of the price — plus an independent SWE-bench Verified of 73.0% and LiveCodeBench 81.5%. It is also one of the few models in this dataset that **does not collapse on Vals' Vibe Code Bench** (47.97%, where Grok scored ~0–4% and Gemini 2.5 Pro 0.40%), which is real evidence of scaffold robustness. Capped hard by **FrontierCode 1.1 at 27.0%** — frontier-difficulty production coding is well out of reach — and by Terminal-Bench 2.0 at 60.0%.
- **Cost efficiency: 84/100.** $0.75 in / $4.50 out per MTok with **$0.075 cached input** for a model posting GPQA 88.0%, SWE-Bench Pro 54.4% and OSWorld 72.1% is excellent value, and two structural discounts compound it: **30% of the GPT-5.4 quota in Codex** (about one-third the cost for simpler tasks) and a **genuinely free consumer route** on ChatGPT Free/Go. Docked because the output rate is 6× the input rate on a model whose reasoning effort is sweepable to xhigh (so real bills skew to output), because there is no free API tier, and because the 400K window you are notionally paying for is only reliable across the first ~128K.
- **Overall Score: 73.4/100.** Mean of the five non-cost dims (76 + 76 + 68 + 72 + 75) / 5 = 73.4. Best fit: exactly the role OpenAI designed it for — a high-volume **subagent** under a larger planner, plus latency-sensitive computer-use and document-OCR loops, and cheap codebase navigation and targeted edits. Keep prompts under ~128K tokens (the MRCR data is unambiguous), do not hand it frontier-difficulty production coding (FrontierCode 27.0%), and verify its factual claims (90.2% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — OpenAI's "Introducing GPT-5.4 mini and nano" launch post (release date, 400K context, API feature surface, pricing, Codex quota economics, ChatGPT Free/Go availability, and the full four-model benchmark table across coding, tool-calling, intelligence, multimodal and long context, including the MRCR v2 and Graphwalks figures and the explicit `reasoning_effort` caveats), the OpenCode Zen docs (ID, endpoint, cached-input rate), BenchLM's aggregated page, and the underlying Vals AI, Artificial Analysis, ARC Prize, Cognition FrontierCode and Epoch AI leaderboards. Where three harnesses measured GPQA Diamond (88.0 / 87.5 / 83.1) the spread is reported rather than averaged away, and OpenAI's self-published long-context degradation is weighted as the decisive evidence for the context score rather than discounted. The `meta.json` `noFreeId` flag is reported as correct for API/Zen but incomplete regarding ChatGPT, and its unverified 128K output figure is labelled second-hand. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
