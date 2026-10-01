# GPT-5.4 nano — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** The smallest and cheapest member of the GPT-5.4 line, released 2026-03-17 **API-only**. OpenAI's own framing of its job is unusually specific: "classification, data extraction, ranking, and **coding subagents that handle simpler supporting tasks**." It is a **significant upgrade over GPT-5 nano** and, in several published rows, it **beats the GPT-5 mini it is not meant to replace** — GPQA Diamond 82.8% vs 81.6%, τ²-bench telecom 92.5% vs 74.1%. What it gives up against GPT-5 mini is exactly the two domains nano was not aimed at: **OSWorld-Verified 39.0%** (GPT-5 mini 42.0%) and **OmniDocBench 0.2419** (GPT-5 mini 0.1791). Not a variant or alias of another entry in this dataset. Scored at **`xhigh`** reasoning effort, per OpenAI's launch table.
- **Provider / access:** **OpenAI API only** (`gpt-5.4-nano`, snapshot `gpt-5.4-nano-2026-03-17`). **Not available in ChatGPT, and not in Codex** — OpenAI announced no consumer integration, positioning it for developer-built pipelines and subagent architectures rather than direct use. Regional processing (data-residency) endpoints carry a **10% uplift**.
- **Release / knowledge:** released **2026-03-17**. Knowledge cutoff **2025-08-31** (same generation as GPT-5.4 mini, GPT-5.4 and GPT-5.4 Pro).
- **IDs:** `gpt-5.4-nano`; snapshot `gpt-5.4-nano-2026-03-17`. Predecessor: `gpt-5-nano`.
- **Context window:** **400,000 tokens** (OpenAI launch post and developer docs) — the same window as GPT-5.4 mini and the full GPT-5.4. Max output not stated on the nano model page. OpenAI's long-context measurements are at **64K–128K and 128K–256K**, well below the advertised ceiling.
- **Modalities:** **text and image in; text out.** Reasoning effort: **`none` (default), `low`, `medium`, `high`, `xhigh`** — the same five-step ladder as the rest of the 5.4 line. Vision is a real capability, not a checkbox: MMMUPro 66.1% and OmniDocBench document editing are both measured. No audio or video input; no non-text output.
- **Pricing (as of 2026-10-01):** **$0.20 / MTok input, $1.25 / MTok output**; cached input **$0.02** (OpenAI developer docs). **Documented caveat:** this is a **~4× price increase over GPT-5 nano** ($0.05 / $0.40) and a ~2.25× increase on output. For comparison, GPT-5.4 mini is $0.75 / $4.50 and GPT-5 nano is still sold at $0.05 / $0.40. Batch pricing published separately at a discount.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

All figures are from **OpenAI's GPT-5.4 mini and nano launch comparison table** (2026-03-17), nano at `xhigh`, against GPT-5.4 (`xhigh`) and GPT-5 mini (`high`).

Agent / tool use:

- **τ²-bench (telecom): 92.5%** — GPT-5.4 98.9%, **GPT-5 mini 74.1%**. An 18.4-point gain over the model one tier up: this is the strongest agentic-service number nano has, and it is the clearest evidence that the 5.4 generation improved nano's reasoning rather than just its speed.
- **MCP Atlas: 56.1%** — GPT-5.4 67.2%, GPT-5 mini 47.6%. Only 1.6 points behind GPT-5.4 mini (57.7%) on multi-step tool use, at a quarter of the input price.
- **Terminal-Bench 2.0: 46.3%** — GPT-5.4 75.1%, GPT-5 mini 38.2%. DataCamp places nano here as comparable to plain GPT-5 (49.6%). This is the weakest area relative to price: **a 28.8-point gap to flagship**.
- **Toolathlon: 35.5%** — GPT-5.4 54.6%, GPT-5 mini 26.9%. Bottom of the launch table's tool row; only GPT-5 mini is lower.
- **OSWorld-Verified: 39.0%** — GPT-5.4 75.0%, **GPT-5 mini 42.0%**. Nano is **the only model in the table that loses to the generation it replaces on a computer-use benchmark**, and DataCamp's read is blunt: "It is obvious that it was not created for computer use tasks." The OSWorld-Verified human baseline is 72.4%.
- Tau3-Banking / GDPval-AA / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 82.8%** — GPT-5.4 93.0%, **GPT-5 mini 81.6%**. Beats the tier above it by 1.2 points, and beats **Claude Haiku 4.5's 67.2%** by 15.6.
- **Humanity's Last Exam: 37.7%** with tools / **24.3%** without tools — GPT-5.4 52.1% / 39.8%, GPT-5 mini 31.6% / 18.3%. HLE-with-tools at 37.7% is above the methodology's 40%+ frontier reference's lower edge and above GPT-5.4 mini's own 41.5% is not claimed — mini is ahead, but both are far ahead of the previous generation.
- **MRCR v2 8-needle: 44.2%** (64K–128K) / **33.1%** (128K–256K) — GPT-5.4 86.0% / 79.3%, GPT-5 mini 35.1% / 19.4%
- CritPt / AIME 2025 / FrontierMath / ARC-AGI / Artificial Analysis Intelligence Index / AA-LCR / AA-Omniscience: **no verified public score found**

Coding:

- **SWE-Bench Pro (Public): 52.4%** — GPT-5.4 57.7%, GPT-5 mini 45.7%. **5.2 points behind a model priced at 3.75× the input rate**, and 6.7 points ahead of the previous generation, on the four-language contamination-resistant harness. For a $0.20/MTok model this is the standout result in the table.
- Terminal-Bench 2.0: 46.3% (see above)
- LiveCodeBench / DeepSWE / SciCode / SWE-bench Verified / Aider Polyglot / Vibe Code Bench: **no verified public score found**

Long context:

- **MRCR v2 8-needle: 44.2%** (64K–128K) / **33.1%** (128K–256K)
- **GraphWalks BFS 0K–128K: 73.4%** — GPT-5.4 93.1%, **GPT-5 mini 73.4%** (exact parity with the tier above, despite a 3.75× cheaper input rate)
- **GraphWalks parents 0–128K (accuracy): 50.8%** — GPT-5.4 89.8%, GPT-5 mini 64.3%. **Nano loses 13.5 points to GPT-5 mini here**, the clearest long-context regression in the launch table.

Vision / multimodal:

- **MMMUPro: 66.1%** — GPT-5.4 81.2%, GPT-5 mini 67.5%. Again nano edges below the tier above on the row it is not aimed at.
- **MMMUPro with Python: 69.5%** — GPT-5.4 81.5%
- **OmniDocBench 1.5 (no tools, Overall Edit Distance, lower is better): 0.2419** — GPT-5.4 0.109, GPT-5.4 mini 0.1263, **GPT-5 mini 0.1791**. **Nano is the worst document editor in the table, including worse than both smaller-and-older GPT-5 nano's sibling GPT-5 mini**, and 2.2× flagship's error distance. Run at reasoning effort `none` to reflect low-cost, low-latency behaviour.

### Normalized scores (1–100)

- **Tool use: 55/100.** The most split dimension in this dataset and the reason nano is not simply "GPT-5.4 mini, cheaper." Up: **τ²-bench telecom 92.5%** (near-frontier, +18.4 over GPT-5 mini) and **MCP Atlas 56.1%** (within 1.6 points of GPT-5.4 mini at a quarter of the input price) — real agentic capability on service and tool workflows. Down: **Toolathlon 35.5%**, bottom of the launch table; **OSWorld-Verified 39.0%**, where nano is the only model that *loses* to the generation it replaces and sits at barely half the 72.4% human baseline; and **Terminal-Bench 2.0 46.3%**, a 28.8-point gap to flagship. It routes and classifies well and cannot drive a computer.
- **Reasoning: 74/100.** The dimension that most justifies nano's price, and where it beats the tier above it. **GPQA Diamond 82.8%** clears GPT-5 mini's 81.6% and beats **Claude Haiku 4.5 (67.2%) by 15.6 points**; **HLE 37.7% with tools** is well above GPT-5 mini's 31.6%. Held to 74 by **HLE 24.3% without tools**, MRCR falling to 33.1% at 128K–256K, and by the absence of any AIME, FrontierMath, ARC-AGI or Intelligence Index figure — which means nano **cannot be placed on the current Artificial Analysis index at all**, and this score rests on two published numbers rather than a composite.
- **Context window: 72/100.** **400,000 tokens**, the same window as the flagship and GPT-5.4 mini, at $0.20/MTok — on price-per-token-of-window this is the best value in the launch. Scored at 72 rather than the band's 84 ceiling because the measured retrieval is weak and uneven: **MRCR 44.2% / 33.1%**, **GraphWalks BFS 73.4%** (exactly matching GPT-5 mini), and **GraphWalks parents 50.8%, a 13.5-point regression against GPT-5 mini**. A 400K window it can only partly use is a spec, and the regression against the previous generation is the reason this is not scored higher.
- **Multimodal: 68/100.** **Text and image in; text out.** Vision is supported and measured, which puts it in the methodology's "+image in = 60–70" band: **MMMUPro 66.1%** and **69.5% with Python** are respectable, and nano's vision is clearly better than GPT-5 nano's. Scored in the band but not at its ceiling because the practical vision workload — **document editing** — is where nano is weakest of all four models in the launch table, at **OmniDocBench 0.2419** edit distance versus GPT-5.4 mini's 0.1263 and GPT-5 mini's 0.1791. For an extraction-and-classification model that is a tolerable trade; for anything reading and rewriting documents it is not.
- **Coding: 70/100.** **SWE-Bench Pro 52.4%** is a genuinely strong result at $0.20/MTok — 5.2 points behind a flagship costing 3.75× the input rate, and 6.7 points ahead of GPT-5 mini on the harder, contamination-resistant, four-language harness. That alone would justify the model for subagent coding work. Capped at 70 by **Terminal-Bench 2.0 46.3%**, which is comparable to plain GPT-5 and 28.8 points behind flagship: it writes competent patches and cannot finish terminal-driven sessions. No SWE-bench Verified, LiveCodeBench, DeepSWE, SciCode or Aider Polyglot figure exists to corroborate.
- **Cost efficiency: 93/100.** **$0.20 / $1.25 per MTok** with cached input at **$0.02** and Batch pricing published at a further discount. Scored well inside the methodology's ~$0.10/$0.20 ≈ 97–99 anchor: the input rate is double that anchor and the output rate is ~6× it, but caching at $0.02 and Batch put the effective figures lower, and no cheaper model in this dataset carries a 400K window and a 52.4% SWE-Bench Pro. Netting the real caveat against it: **this is a ~4× price increase over GPT-5 nano ($0.05 / $0.40)**, so a pipeline already built on GPT-5 nano at scale sees a 4× bill. GPT-5 nano remains available at the old price; if pure extraction cost is the only criterion, it is still the cheaper option. Nano is priced for capability per token, not for absolute token price.
- **Overall Score: 68/100.** (55 + 74 + 72 + 68 + 70) / 5 = 67.8 → **68**. Best fit: **API-only high-volume classification, extraction, ranking and supporting-work coding subagents**, especially where a 400K window lets one cheap call replace many, and where vision is read-only rather than document-editing. GPT-5.4 mini is the better default almost everywhere — it is faster, 3.75× the price, and better at tool calling, computer use and terminal work — so nano's justification is volume at the margin. **Not** a fit for autonomous desktop operation (39.0% OSWorld-Verified, and it regresses against its own predecessor), terminal agents (46.3%), or document rewriting (worst OmniDocBench in the launch). And it is API-only: no ChatGPT, no Codex, so it is a pipeline component rather than a tool a person uses.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.4 mini and nano launch post (`openai.com/index/introducing-gpt-5-4-mini-and-nano/`), whose five comparison tables supply every agentic, reasoning, coding, multimodal and long-context figure used here with reasoning-effort settings stated; OpenAI's developer model page for `gpt-5.4-nano` (pricing, cached rate, effort ladder, snapshot ID, regional-processing uplift, and its price ladder against GPT-5.4 mini, GPT-5.4 nano's predecessor GPT-5 nano and the flagship); DataCamp's launch analysis, source of the "not created for computer use tasks" reading and the GPT-5 Terminal-Bench cross-reference; Lets Data Science's pricing analysis, source of the generational-repricing caveat and the Claude Haiku 4.5 cross-comparison; and ZDNET's release coverage for the API-only positioning. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Where nano loses to GPT-5 mini (OSWorld-Verified, OmniDocBench, GraphWalks parents) that is recorded rather than omitted.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Nano_Recheck.md`, using the same headings — the `none`/`low`/`medium` effort tiers are untested here, and `none` is the API default, so the shipped-by-default configuration may score materially differently from the `xhigh` configuration scored above.