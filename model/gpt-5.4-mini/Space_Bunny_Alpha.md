# GPT-5.4 mini — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's 2026-03-17 replacement for GPT-5 mini and, on OpenAI's own framing, its most capable small model yet. It "brings many of the strengths of GPT-5.4 to faster, more efficient models designed for high-volume workloads," running **more than 2× faster than GPT-5 mini** while improving across coding, reasoning, multimodal understanding and tool use. Its headline is **near-flagship parity on the benchmarks that matter**: it approaches GPT-5.4 on SWE-Bench Pro (54.4% vs 57.7%) and comes within three points on OSWorld-Verified (72.1% vs 75.0%, against a **human baseline of 72.4%**). OpenAI positions it explicitly as a **subagent target** — in Codex it burns only **30% of the GPT-5.4 quota**, and Codex can delegate to mini subagents so less reasoning-intensive work runs on the cheaper model. Not a variant or alias of another entry in this dataset. Scored at **`xhigh`** reasoning effort, the configuration OpenAI's published table uses.
- **Provider / access:** **OpenAI API** (`gpt-5.4-mini`, snapshot `gpt-5.4-mini-2026-03-17`), **Codex** (app, CLI, IDE extension, web), and **ChatGPT**. In ChatGPT it is available to **Free and Go** users via the "Thinking" feature in the + menu, and serves as the **rate-limit fallback** for all other users on GPT-5.4 Thinking. In Codex it is the natural default for "simpler coding tasks… at about one-third the cost." Regional processing (data-residency) endpoints carry a **10% uplift**.
- **Release / knowledge:** released **2026-03-17**. Knowledge cutoff **2025-08-31** (OpenAI model docs; the page renders as "Aug 31, 2025 knowledge cutoff").
- **IDs:** `gpt-5.4-mini`; snapshot `gpt-5.4-mini-2026-03-17`. Predecessor: `gpt-5-mini`.
- **Context window:** **400,000 tokens** (OpenAI launch post and developer docs). Max output is not stated on the mini model page; the flagship GPT-5.4 lists 128,000 and GPT-5.4 Pro 128,000. The long-context block on OpenAI's launch page is measured at **64K–128K and 128K–256K**, i.e. below the advertised window, and that is the range the retrieval numbers actually describe.
- **Modalities:** **text and image in; text out** (OpenAI launch post). The API surface explicitly supports **tool use, function calling, web search, file search, computer use, and skills** — the broadest tool surface of any mini-class model in this dataset. Reasoning effort: **`none` (default), `low`, `medium`, `high`, `xhigh`**. No audio or video input; no non-text output.
- **Pricing (as of 2026-10-01):** **$0.75 / MTok input, $4.50 / MTok output**; cached input **$0.075** (OpenAI developer docs). **Important caveat, documented rather than glossed:** this is a **~3× price increase over the model it replaces** — GPT-5 mini was $0.25 / $2.00. Lets Data Science's framing is the accurate one: identical workloads cost three times more to run. Batch API pricing is published separately at a discount. For comparison, the flagship GPT-5.4 is $2.50 / $15.00 and **Gemini 3 Flash is ~$0.50 / ~$1.50**, roughly a third cheaper on input.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

All figures below are from **OpenAI's own launch comparison table** (2026-03-17), which scores GPT-5.4 mini at `xhigh` against GPT-5.4 (`xhigh`) and GPT-5 mini (`high`, the highest effort GPT-5 mini supports). GPT-5 mini figures are given as the generational baseline.

Agent / tool use:

- **OSWorld-Verified: 72.1%** — versus GPT-5.4's 75.0% and GPT-5 mini's 42.0%. **Human performance on OSWorld-Verified is 72.4%**, so this model is effectively at the human baseline on desktop computer operation. This is the single most striking number on the card and it is the one OpenAI leads with.
- **τ²-bench (telecom): 93.4%** — GPT-5.4 98.9%, GPT-5 mini 74.1%
- **Terminal-Bench 2.0: 60.0%** — GPT-5.4 75.1%, GPT-5 mini 38.2%. DataCamp's reading: at 60.0% mini "can compete with previous flagship models, such as GPT-5.2 (62.2%)" — i.e. it holds late-2025 flagship territory on terminal work.
- **Toolathlon: 42.9%** — GPT-5.4 54.6%, GPT-5 mini 26.9%. This is where mini's gap to flagship is widest after Terminal-Bench: ~12 points.
- **MCP Atlas: 57.7%** — GPT-5.4 67.2%, GPT-5 nano's predecessor GPT-5 mini 47.6%
- Tau3-Banking / GDPval-AA / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 88.0%** — GPT-5.4 93.0%, GPT-5 mini 81.6%. A 5-point drop from flagship; inside the methodology's 90%+ frontier band by 2 points.
- **Humanity's Last Exam: 41.5%** with tools / **28.2%** without tools — GPT-5.4 52.1% / 39.8%, GPT-5 mini 31.6% / 18.3%
- **MRCR v2 8-needle: 47.7%** at 64K–128K and **33.6%** at 128K–256K (GPT-5.4 86.0% / 79.3%; GPT-5 mini 35.1% / 19.4%). A large generational gain on its own terms, and still far behind the flagship.
- CritPt / AIME 2025 / FrontierMath / ARC-AGI / Artificial Analysis Intelligence Index / AA-LCR / AA-Omniscience: **no verified public score found** for GPT-5.4 mini at any effort.

Coding:

- **SWE-Bench Pro (Public): 54.4%** — GPT-5.4 57.7%, GPT-5 mini 45.7%. A 3.3-point gap to flagship on the four-language, contamination-resistant harness, and an **8.7-point generational gain**. This is the number that justifies the model.
- **Terminal-Bench 2.0: 60.0%** (see above) — for a coding agent, terminal competence is part of coding performance.
- LiveCodeBench / DeepSWE / SciCode / SWE-bench Verified / Aider Polyglot / Vibe Code Bench: **no verified public score found**

Long context:

- **MRCR v2 8-needle: 47.7%** (64K–128K) / **33.6%** (128K–256K) — see above. Against GPT-5.4's 86.0% / 79.3%, mini's retrieval degrades sharply with length.
- **GraphWalks BFS 0K–128K: 76.3%** — GPT-5.4 93.1%, GPT-5 mini 73.4% (nano-tier parity with the previous generation's mini).
- **GraphWalks parents 0–128K (accuracy): 71.5%** — GPT-5.4 89.8%, GPT-5 mini 64.3%
- These four figures are unusual and valuable: OpenAI published **actual long-context retrieval measurements** for this launch, at two length bands, on three harnesses. That is more long-context evidence than most models in this dataset have at all.

Vision / multimodal:

- **MMMUPro: 76.6%** — GPT-5.4 81.2%, GPT-5 mini 67.5%
- **MMMUPro with Python: 78.0%** — GPT-5.4 81.5%
- **OmniDocBench 1.5 (no tools, Overall Edit Distance, lower is better): 0.1263** — GPT-5.4 0.109, GPT-5 mini 0.1791. Document-editing fidelity, measured with reasoning effort set to `none` to reflect low-cost/low-latency behaviour. Mini beats the previous generation here by a wide margin and sits close to flagship.

### Normalized scores (1–100)

- **Tool use: 78/100.** The strongest dimension, and the one where mini most credibly substitutes for a flagship. **OSWorld-Verified 72.1% against a 72.4% human baseline** — that is desktop computer operation at human parity for a third of flagship cost, and OpenAI puts it in the same sentence as its flagship claim. **τ²-bench telecom 93.4%** is near-frontier on service workflows. **Terminal-Bench 2.0 60.0%** puts it in previous-flagship territory. Capped at 78 by **Toolathlon 42.9%** — a ~12-point gap to GPT-5.4 and the clearest evidence that structured tool-calling, as opposed to operating a computer, is where the size reduction bites — and by the absence of any Tau3-Banking, GDPval-AA or Claw-Eval figure to check it against.
- **Reasoning: 78/100.** **GPQA Diamond 88.0%** sits two points under the methodology's 90% frontier threshold and five under GPT-5.4's 93.0%; **HLE 41.5% with tools** is genuinely respectable for a mini-class model. Held to 78 rather than mid-80s by **HLE 28.2% without tools**, **MRCR collapsing from 47.7% to 33.6%** as the needle length grows, and by a total absence of AIME, FrontierMath, ARC-AGI and Intelligence Index figures — on today's index family this model cannot be placed relative to peers at all.
- **Context window: 74/100.** **400,000 tokens** places it in the methodology's 200K–500K band. Unusually, the evidence behind the spec exists and is mixed in a specific way: **MRCR 47.7% at 64K–128K** and **33.6% at 128K–256K** show measurable retrieval that *degrades with length*, while **GraphWalks BFS 76.3%** and **GraphWalks parents 71.5%** show reasonable structural reasoning over 128K. Against GPT-5.4's 86.0% / 79.3% / 93.1% / 89.8%, mini gives up 15–20 points on every one of the four. Scored at 74 for a real 400K window with real-but-weak retrieval, not at the 84 band ceiling, and not in the 500K–1M band.
- **Multimodal: 70/100.** **Text and image in; text out** — the methodology's "+image in = 60–70" band, scored at its ceiling because the measured quality is close to flagship: **MMMUPro 76.6%** and **78.0% with Python** against GPT-5.4's 81.2% / 81.5%. **OmniDocBench 1.5 edit distance 0.1263** (vs flagship 0.109, GPT-5 mini 0.1791) is the more revealing number: on document *editing* fidelity at `none` reasoning effort, mini is close to flagship and far ahead of its own predecessor. Not scored above 70 because the methodology's ceiling for image-only input applies, and no audio, video or PDF input is documented.
- **Coding: 78/100.** **SWE-Bench Pro 54.4%** is a 3.3-point gap to a model OpenAI prices at more than three times the input rate and roughly the same output multiple — on the harder, contamination-resistant, four-language benchmark. That is a genuine frontier-tier patch-generation result for a small model. Capped at 78 by **Terminal-Bench 2.0 60.0% against flagship 75.1%** (a 15-point drop, the second-widest gap in the launch table after Toolathlon) and by the absence of SWE-bench Verified, LiveCodeBench, DeepSWE, SciCode and Aider Polyglot figures. It writes good patches faster than the flagship; it does not drive a terminal as well.
- **Cost efficiency: 90/100.** **$0.75 / $4.50 per MTok** with cached input at **$0.075** and Batch pricing published at a further discount. Scored in the methodology's ~$1.25/$4.25 ≈ 88 band and slightly above it on the input rate, minus a small amount on the output rate. Two real offsets and one real caveat are netted into the score: **in Codex it consumes only 30% of the GPT-5.4 quota**, which is a per-task cost figure far better than the per-token rates suggest; but **pricing is ~3× GPT-5 mini's $0.25/$2.00**, so any pipeline budgeted on the previous generation sees a 3× bill for the same requests. Versus Gemini 3 Flash at roughly $0.50/$1.50, mini is a third more expensive on input. This is the best cost/quality point in the OpenAI small-model line, not the cheapest model on the market.
- **Overall Score: 76/100.** (78 + 78 + 74 + 70 + 78) / 5 = 75.6 → **76**. Best fit: **the default production small model of 2026 for high-volume agentic and coding workloads** — a GPT-5.4 orchestrator delegating parallel subtasks to mini subagents at 30% of flagship quota, desktop automation at human parity, 400K context, and near-flagship SWE-Bench Pro. The decision rule is narrow and worth stating: choose mini over GPT-5.4 for volume, latency and cost, and over GPT-5 mini **only** if you are also repricing for the 3× — GPT-5 mini remains the right call for pure extraction and classification at $0.25/$2.00.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.4 mini and nano launch post (`openai.com/index/introducing-gpt-5-4-mini-and-nano/`), whose five comparison tables supply every agentic, reasoning, coding, multimodal and long-context figure used here with the reasoning-effort settings stated; OpenAI's developer model page for `gpt-5.4-mini` (pricing, cached rate, effort levels, snapshot ID, knowledge cutoff, regional-processing uplift); DataCamp's launch analysis; Lets Data Science's pricing analysis, which is the source of the generational-repricing caveat; and ZDNET's release coverage for the ChatGPT availability tiers. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. The human OSWorld-Verified baseline of 72.4% is Lets Data Science's figure and is used only as a comparison point.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Mini_Recheck.md`, using the same headings — the `none`/`low`/`medium` effort tiers are untested here and could be scored separately, since `none` is the API default.