# GPT-5.4 — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.4` / `gpt-5.4` / `opencode/gpt-5.4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's **2026-03-05** convergence release unifying GPT-5.3 Codex (coding) and GPT-5.2 (general reasoning) into a single frontier model. **1M+ context (922K input / 128K output)**, native **computer use** (first OpenAI general-purpose model with desktop navigation), **tool search** cutting MCP token usage by **47%**, configurable reasoning across five effort levels. **OSWorld-Verified 75.0%** (beats human 72.4%); **GDPval 83%** across 44 occupations; **SWE-bench Pro 57.7%**; **GPQA Diamond 92.8%**; **AA Intelligence Index 57**.
- **Provider / access:** OpenAI API `gpt-5.4`; OpenRouter `openai/gpt-5.4`; Azure AI Foundry; Bedrock. Three variants: base, Thinking, Pro. **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2026-03-05**; knowledge cutoff early-2026 (not publicly disclosed to month precision).
- **IDs:** `openai/gpt-5.4`, `gpt-5.4`, `opencode/gpt-5.4`.
- **Context window:** **1,050,000 tokens total / 922,000 input / 128,000 output**. Effective long-context performance drops after 272K (Graphwalks accuracy: 93% at 128K → 21.4% at 256K-1M).
- **Modalities:** **Text + image in; text out.** Native computer use (screenshots + mouse/keyboard), tool calls, structured output, context caching, vision.
- **Pricing (as of 2026-10-16):** **Standard ≤272K: $1.25 in / $7.50 out** per 1M; **>272K: $5.00 in / $22.50 out** (2×/1.5× surcharge on input/output); **resellers (OpenRouter/Bedrock/Azure): $2.50 / $15.00**. Cache discount available. Pro tier $30/$180.
- **Architecture:** Proprietary. GPT-5.3 Codex + GPT-5.2 unification, 5-level reasoning effort (`none` → `xhigh`).

### Raw benchmarks found

Triangulated across **five** independent surfaces: OpenAI launch post, Artificial Analysis independent composite, Vals AI independent Vals Index, Scale Labs MCP Atlas, Alex Lavaee independent third-party analysis. Most headline numbers have ≥2 independent reproductions.

Agent / tool use:

- **OSWorld-Verified**: **75.0%** (OpenAI / Alex Lavaee) — *surpasses human 72.4%*; **GPT-5.4 is the first OpenAI general-purpose model with native desktop navigation**. Box validated at 95% first-attempt success across ~30,000 property-tax portal tasks.
- **WebArena-Verified**: **67.3%** (vs GPT-5.2 65.4%).
- **GDPval (44 occupations)**: **83.0%** (vs GPT-5.2 70.9%, Claude Opus 4.6 78.0%) — *matches or exceeds industry professionals in 83% of comparisons*. Spreadsheet modeling **87.3%** (vs GPT-5.2 68.4%).
- **GDPval-AA v2.1 (AA, Xhigh, Mar 2026)**: **1246 Elo**.
- **BrowseComp**: **82.7%** (vs GPT-5.2 65.8%, Claude Opus 4.6 84.0%).
- **MCP Atlas (Scale Labs, xhigh)**: **70.6%** / **75.4% public** (vs GPT-5.5 xhigh 75.3/79.4%, Gemini-3-Pro-Preview 70.3/73.0%, Claude Opus 4.5 high 69.8/73.4%). Tool search feature reduces MCP token usage **47%**.
- **Toolathlon**: **54.6%** (vs GPT-5.2 46.3%).
- **Tau2-Bench Telecom**: **98.9%** (vs Claude Opus 4.6 99.3%).
- **Terminal-Bench 2.0 (OpenAI)**: **75.1%** (regression from GPT-5.3 Codex 77.3%; trails Gemini 3.1 Pro 78.4%, Opus 4.6 74.7% KIRA harness).
- **Terminal-Bench 2.1 (Vals, GPT-5.4 xhigh bash-only)**: **78.2%** (vs GPT-5.4 mini 73.0).
- **Vals Index (independent)**: **81.4%** (xhigh, **#4** of frontier; tied with Opus 4.8 and GPT-5.5).
- **AA Intelligence Index**: **57** (ties Gemini 3.1 Pro 57.2; behind Opus 5/5.5/Fable 5).
- **LiveBench (Thinking xhigh)**: **80.28** (barely leads Gemini 3.1 Pro Preview 79.93).

Reasoning / knowledge:

- **GPQA Diamond**: **92.8%** (OpenAI / Alex Lavaee; vs Claude Opus 4.6 91.3%, GPT-5.2 92.4%).
- **ARC-AGI-2 (Verified)**: **73.3%** (vs GPT-5.5 85.0%, Claude Opus 4.7 75.8%).
- **BigLaw Bench (legal)**: **91%** — *"new bar for document-heavy legal work"* per OpenAI launch.
- **Hallucinated claims dropped 33%** vs GPT-5.2 (vendor claim; not independently reproduced in surveyed sources).
- **Deception rate reduced to 2.1%** (vs o3's 4.8%) — OpenAI-acknowledged, but still 1 in 50 tasks.

Coding:

- **SWE-bench Verified (Vals)**: **77.2%** (vs Claude Opus 4.6 79.2%, Gemini 3.1 Pro 80.6% — *trails* on independent harness).
- **SWE-bench Pro (OpenAI)**: **57.7%** (vs GPT-5.3 Codex 56.8%, GPT-5.2 55.6%, Gemini 3.1 Pro 54.2%, Claude Opus 4.6 ~45%).
- **Arena Coding Elo**: **~1481** (vs Claude Opus 4.6 1561 #1; GPT-5.4 may not have enough Arena votes for stable rank).

Long context:

- 1M+ declared window. **Graphwalks at 128K: 93%**; at **256K-1M: 21.4%** (one independent test: instructions at token 850,000 missed 40% of the time). The effective long-context range is ~272K before the price surcharge kicks in, and the accuracy drops further past that.

Other:

- **Image input**: "detail": "original" preserves up to 10.24 megapixels (6000px max) — critical for click accuracy on dense UIs.
- **Tool search**: defers MCP tool definitions; on 250 Scale MCP Atlas tasks with all 36 servers, **47% token reduction** at the same accuracy.

Pricing compared to peers (current as of 2026-10-16):

- **vs GPT-5.2 ($1.75/$14.00)**: GPT-5.4 ≤272K is **0.71× / 0.54×** (cheaper on both); >272K is **2.86× more** input.
- **vs Claude Opus 4.6 ($5/$25)**: GPT-5.4 ≤272K is **4× cheaper** input, **3.3× cheaper** output; >272K flips parity.
- **vs Claude Sonnet 4.6 ($3/$15)**: GPT-5.4 ≤272K is **2.4× cheaper** input, **2× cheaper** output.
- **vs GPT-6 Sol ($2/$10)**: GPT-5.4 ≤272K is **1.6× cheaper** input, **1.33× cheaper** output.
- **vs Gemini 3.1 Pro ($2/$12)**: GPT-5.4 ≤272K is **1.6× cheaper** input, **1.6× cheaper** output.
- **vs Grok 4.6 ($2/$6 <200K, $4/$12 ≥200K)**: GPT-5.4 ≤272K is **1.6× cheaper** input but **1.25× more** output at <200K.

### Normalized scores (1–100)

- **Tool use: 86/100.** **OSWorld-Verified 75% (surpasses human)**, **GDPval 83%**, **MCP Atlas 70.6/75.4%**, **Toolathlon 54.6**, **Tau2-Bench 98.9**, **Terminal-Bench 2.1 (Vals xhigh) 78.2** are the strongest axes — GPT-5.4 *leads* on computer use and knowledge work; but Terminal-Bench 2.0 regressed to 75.1 from 77.3 (GPT-5.3 Codex), and Claude Opus 4.6 still leads Tau2-Bench (99.3 vs 98.9).
- **Reasoning: 84/100.** **GPQA Diamond 92.8%**, **AA Intelligence Index 57** (tied Gemini 3.1 Pro), **BigLaw Bench 91%**, **ARC-AGI-2 73.3%**, **LiveBench 80.28** are strong; but ARC-AGI-2 trails GPT-5.5 (85.0) and Opus 4.7 (75.8) by 11.7 / 2.5 pt; HLE / HAA-Omniscience specifics not surfaced in surveyed sources — there's a likely gap below the very top.
- **Context window: 80/100.** 1M+ declared but **Graphwalks accuracy collapses 93% → 21.4%** past 128K-256K; >272K has a 2×/1.5× surcharge; effective operational range is ~128K-272K. The 1M number is more aspirational than operational.
- **Multimodal: 82/100.** Text + image in, text out; native computer use is the *new* multimodal capability (visual desktop control). Image fidelity at 10.24 megapixels for click accuracy. No native audio/video.
- **Coding: 78/100.** SWE-bench Pro 57.7% leads on the harder benchmark; SWE-bench Vals 77.2% trails Claude Opus 4.6 (79.2) and Gemini 3.1 Pro (80.6); Terminal-Bench 2.0 regressed from 77.3 to 75.1; Arena Coding Elo ~1481 trails Opus 4.6's 1561. **Code-fixing and targeted repairs** are subjective strengths per practitioner reviews.
- **Cost efficiency: 82/100.** ≤272K $1.25/$7.50 is *competitive* with Gemini 3.1 Pro and beats Claude Opus 4.6 by 4× on input; >272K surcharge erodes that; tool search 47% MCP token reduction is a real efficiency multiplier; not free (no Zen ID), but a clear step down from Opus 4.6 / 4.7.
- **Overall Score: 82/100** Half-up mean of the five non-cost dims: (86 + 84 + 80 + 82 + 78) / 5 = 410 / 5 = 82.0 → **82**. Best fit: **desktop automation / computer-use agents** (75% OSWorld is *the* capability unlock), MCP-heavy agentic workflows (47% token reduction via tool search), and knowledge-work / GDPval 83% tasks. Watch for: Terminal-Bench regression vs GPT-5.3 Codex, the 2× input surcharge past 272K, and Claude Opus 4.6 still leads on SWE-bench Verified (79.2 vs 77.2) and Tau2-Bench Telecom (99.3 vs 98.9) — task-based routing remains the right strategy.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Five-source triangulation (OpenAI launch post + Artificial Analysis independent composite + Vals AI independent Vals Index + Scale Labs MCP Atlas + Alex Lavaee independent third-party review). Identity resolved: this is **OpenAI GPT-5.4** (2026-03-05), the **base variant** (not GPT-5.4 Thinking, not GPT-5.4 Pro, not GPT-5.4 mini, not GPT-5.5 successor or GPT-5.3 Codex predecessor). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

