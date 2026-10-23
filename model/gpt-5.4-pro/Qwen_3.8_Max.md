# GPT-5.4 Pro — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** The **highest-effort reasoning tier** of OpenAI's GPT-5.4 family (launched 2026-03-05 alongside GPT-5.4 Thinking). Where base GPT-5.4 balances speed and cost, Pro spends additional inference-time compute to "think harder" and return more consistent answers on the hardest professional, science, and agentic-search problems. GPT-5.4 itself was a **model-line reset**: the first mainline OpenAI reasoning model to absorb GPT-5.3-Codex's frontier coding *and* add native computer use *and* a 1.05M-token API context in one default model. Pro is the step-up ceiling for high-stakes, long-horizon deliverables (financial models, slide decks, legal analysis, deep research).
- **Provider / access:** OpenAI **Responses API only** (`gpt-5.4-pro`); OpenRouter `openai/gpt-5.4-pro`. In ChatGPT reserved for **Pro and Enterprise** plans. Because a single request can take minutes of reasoning, OpenAI recommends **background mode** to avoid timeouts.
- **Release / knowledge:** Released **2026-03-05** (with GPT-5.4 and GPT-5.4 Thinking; GPT-5.4 Thinking replaced GPT-5.2 Thinking, which retired 2026-06-05). Knowledge cutoff **August 31, 2025**.
- **IDs:** `gpt-5.4-pro` (family: `gpt-5.4`, `gpt-5.4-pro`; GPT Pro lineage: GPT-5 Pro → 5.1 Pro → 5.2 Pro → **5.4 Pro** → 5.5 Pro).
- **Context window:** 1,050,000 tokens; up to 128,000 output. **Billing trap:** prompts over 272K input tokens incur a 2x input / 1.5x output multiplier. **Reality check:** retrieval quality drops sharply past 256K — MRCR v2 512K–1M falls to 36.6% (vs 97.3% at 4K–8K, 86.0% at 64K–128K); use the far end for synthesis, not precise recall.
- **Modalities:** text + image in → text out (**no audio/video**); reasoning yes (adjustable effort: medium / high / xhigh); native tool use yes — web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, **computer use**, MCP, and **tool search**.
- **Pricing (as of 2026-10-23):** **$30 input / $180 output** per 1M tokens (premium reasoning tier — 12x base GPT-5.4's $2.50/$15, and identical to GPT-5.5 Pro). ChatGPT Pro/Enterprise; Responses API only.
- **Architecture:** Undisclosed proprietary frontier reasoning model; the highest-effort tier of the GPT-5.4 family (spends more inference-time compute to deliver more consistent answers). Exact parameter count not disclosed.

### Raw benchmarks found

Reasoning / knowledge (GPT-5.4 Pro–specific, OpenAI launch evals via ai-tldr.dev):

- **GPQA Diamond: 94.4%** — state-of-the-art expert science reasoning (base GPT-5.4 92.8%; above GPT-5.5's 93.6%)
- **ARC-AGI-2 (Verified): 83.3%** — strong abstract / fluid reasoning
- **FrontierMath Tier 4: 38%** — hardest competition-math tier
- HLE (Humanity's Last Exam) with tools: **58.7%** (no-tools 42.7%) — from Vellum's cross-model table built on Anthropic's Opus 4.7 system card (see Provenance)
- GPT-5.4 line professional work (base, for reference): GDPval **83.0%** (up from GPT-5.2's 70.9%); investment-banking modeling **87.3%** (vs 68.4%); OfficeQA **68.1%** (vs 63.1%); 33% fewer false claims and 18% fewer error-containing responses vs GPT-5.2

Agent / tool use:

- **BrowseComp: 89.3%** (Pro) — deep agentic web search, well above base GPT-5.4's 82.7%
- Native computer use (OpenAI's first general-purpose model with it): the GPT-5.4 line scores **OSWorld-Verified 75.0%** (vs GPT-5.2's 47.3%, above OpenAI's cited 72.4% human baseline)
- GPT-5.4 line tool evals (base): **MCP Atlas 67.2%**, **Toolathlon 54.6%**, **Tau2-bench Telecom 98.9%**
- Full agent stack + **tool search** (dynamically loads tools only when needed, cutting token use and preserving cache)

Coding:

- First mainline reasoning model to absorb **GPT-5.3-Codex**-level coding. GPT-5.4 line (base): **SWE-Bench Pro (Public) 57.7%** (edges GPT-5.3-Codex 56.8%, GPT-5.2 55.6%); **Terminal-Bench 2.0 75.1%** (GPT-5.3-Codex still leads at 77.3%)
- OpenAI did **not** publish separate Pro-tier SWE-Bench / Terminal-Bench numbers; Pro inherits the line's coding with extra inference compute

Multimodal:

- Text + image only (no audio/video). GPT-5.4 line: **MMMU-Pro 81.2% (no tools) / 82.1% (with tools)**; image generation + native computer-use screenshot loop; human raters preferred GPT-5.4 presentations **68.0%** of the time over GPT-5.2

Long context:

- MRCR v2: **97.3%** (4K–8K), **86.0%** (64K–128K), **36.6%** (512K–1M) — sharp far-edge degradation

> Provenance: GPT-5.4 Pro–specific figures (GPQA Diamond 94.4%, BrowseComp 89.3%, ARC-AGI-2 83.3%, FrontierMath T4 38%, $30/$180 pricing, 1.05M/128K context, medium/high/xhigh effort, Responses-API-only, Aug-31-2025 cutoff) come from OpenAI's GPT-5.4 launch evals as aggregated by ai-tldr.dev's dedicated GPT-5.4 Pro page and Umesh Malik's source-checked "GPT-5.4 for Agents" guide (updated 2026-08-06). Most granular OpenAI benchmarks (GDPval, OSWorld, SWE-Bench Pro, Terminal-Bench, MMMU-Pro, MCP Atlas, MRCR) were published for the **GPT-5.4 line / base**, not broken out for the Pro tier — Pro is the same family at maximum inference effort, so those are the best available proxies and are labeled as such. HLE with-tools 58.7% is from a **Vellum** cross-model table (Anthropic's Opus 4.7 system card), not OpenAI's own release, so it carries a different harness. All OpenAI numbers are **vendor-run** (no independent-lab verification was available at launch); per the model-comparison methodology, vendor figures are treated as an upper bound and discounted against neutral harnesses (Artificial Analysis, Vals, LiveBench, NIST CAISI). No Finance-Agent figure was confidently sourced for Pro, so none is claimed.

### Normalized scores (1–100)

- **Tool use: 89/100.** The full native agent stack (web/file search, image gen, code interpreter, hosted shell, apply-patch, skills, computer use, MCP, tool search) plus a Pro-specific **BrowseComp 89.3%** (deep agentic search, far above base GPT-5.4's 82.7%) and the line's landmark **native computer use** (OSWorld-Verified 75.0%, above the cited human baseline). Held just below the frontier by a middling **MCP Atlas 67.2%** (vs Claude/Gemini), modest Toolathlon 54.6%, and the fact that every number is vendor-run with no independent confirmation.
- **Reasoning: 90/100.** The highest-effort tier delivers SOTA-class expert reasoning — **GPQA Diamond 94.4%** (above GPT-5.5's 93.6%), **ARC-AGI-2 83.3%**, **FrontierMath T4 38%**, HLE-with-tools 58.7%, plus the line's strong professional-work results (GDPval 83.0%, investment-banking modeling 87.3%, 33% fewer false claims). Capped at parity with GPT-5.5 rather than above it because it is a prior-generation tier whose headline science numbers are vendor-reported and whose HLE figure comes from a third-party (Vellum) harness.
- **Context window: 90/100.** A confirmed **1,050,000-token** window with 128K output and strong short/mid-range recall (MRCR v2 97.3% at 4K–8K, 86.0% at 64K–128K). Discounted from GPT-5.5's 93 because far-edge retrieval collapses (**36.6% at 512K–1M** vs GPT-5.5's 74.0%) and the **272K-input 2x/1.5x billing multiplier** penalizes very long agent prompts.
- **Multimodal: 84/100.** Solid vision — **MMMU-Pro 81.2%/82.1%**, native image generation, screenshot-based computer use, and presentations preferred 68% over GPT-5.2 — but **text + image only (no audio/video)**, materially narrower than GPT-5.5's natively omnimodal input (90).
- **Coding: 86/100.** The first mainline model to fold in **GPT-5.3-Codex**-class coding, making it a genuinely strong all-around engineering model (SWE-Bench Pro 57.7% edges the Codex specialist; Terminal-Bench 2.0 75.1%; 1.05M context for whole-repo work; computer use for UI/QA loops). Held below the high-80s because OpenAI published **no Pro-specific coding numbers** (Pro inherits the base line's), **Terminal-Bench still trails GPT-5.3-Codex (77.3%)**, and **SWE-Bench Pro (57.7%) sits well behind the Claude frontier** (Opus 4.7 64.3%, Fable 5 80.0%) on production-grade repository work.
- **Cost efficiency: 40/100.** The premium ceiling tier at **$30/$180** per 1M tokens — 12x base GPT-5.4 ($2.50/$15), equal to GPT-5.5 Pro — with multi-minute latency (background mode required), Responses-API-only access, ChatGPT Pro/Enterprise gating, and the 272K-token 2x/1.5x multiplier. Justified only for the hardest, highest-stakes tasks where consistency beats latency and price; scored but **not** counted in the Overall per methodology.
- **Overall Score: 88/100.** Mean of Tool 89 + Reasoning 90 + Context 90 + Multimodal 84 + Coding 86 = 87.8 → 88. Best fit: **maximum-ceiling professional reasoning** — expert science/math, deep multi-round agentic research, long-horizon financial/legal deliverables, computer-use automation, and whole-repo agentic coding where a few minutes of extra "thinking" and a premium price are acceptable. For high-volume or latency-sensitive work, base GPT-5.4 ($2.50/$15) or the newer GPT-5.5 / GPT-5.6 Terra deliver most of the capability far cheaper; for production-grade repository bug-fixing, Claude still leads on SWE-Bench Pro. Independent read: my 88 sits just below the queue's curated 88.6, discounting vendor-run science numbers and the Pro tier's lack of separately published coding/multimodal/long-context results.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (OpenAI's GPT-5.4 launch evals via ai-tldr.dev's dedicated GPT-5.4 Pro spec page and Umesh Malik's source-checked "GPT-5.4 for Agents" complete guide, updated 2026-08-06; Vellum's Anthropic-system-card cross-model table for HLE-with-tools). Pro-specific OpenAI numbers are limited to GPQA/BrowseComp/ARC-AGI-2/FrontierMath; most granular benchmarks are published for the GPT-5.4 line and used as labeled proxies. All vendor figures are treated as an upper bound and discounted against neutral harnesses; scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
