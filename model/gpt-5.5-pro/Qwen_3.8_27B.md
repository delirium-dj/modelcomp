# GPT-5.5 Pro — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.5-pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's deep-reasoning "maximum performance" tier of the GPT-5.5 generation — more compute per response for harder questions, complex research, and high-accuracy professional work. Sits above GPT-5.5 ($5/$30) and below the GPT-6 flagship line now current in late 2026.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5-pro`; OpenAI API `gpt-5.5-pro` — Responses API + Batch API supported (improvement over GPT-5.4 Pro, which was Responses-only); background mode recommended since requests can take several minutes.
- **Release / knowledge:** Released 2026-04-23 in ChatGPT; available in the API from 2026-04-24 (OpenAI launch post update + API changelog); knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5-pro`, pinned snapshot `gpt-5.5-pro-2026-04-23`; `opencode/gpt-5.5-pro` on Zen.
- **Context window:** 1,050,000 total (1.05M); 128,000 max output (verified from OpenAI docs model card).
- **Modalities:** text + image in; text out; reasoning effort medium/high (default)/xhigh; tool calls incl. `function_calling`, `web_search`, `file_search`, `image_generation`, `code_interpreter`, `hosted_shell`, `mcp`.
- **Pricing (as of 2026-09-30):** input $30 / output $180 per 1M, no cached-input discount (OpenAI docs). Regional-processing endpoints carry a 10% uplift.
- **Architecture:** proprietary.

### Raw benchmarks found

> Verified via public web research: OpenAI "Introducing GPT-5.5" launch post (April 23, 2026) evaluations tables and OpenAI docs model card. Evals run at reasoning effort xhigh unless noted. OpenAI did not publish SWE-bench Pro, Terminal-Bench, Expert-SWE, OSWorld, Tau2, MCP Atlas, Toolathlon, CTF, or long-context retrieval numbers for the Pro tier (all "—" in their table).

Agent / tool use:

- BrowseComp: **90.1%** — highest in OpenAI's launch table (new SOTA at launch) vs GPT-5.4 Pro 89.3%, GPT-5.5 84.4%, Gemini 3.1 Pro 85.9% (OpenAI, ChatGPT search tool with blocklist)
- Tau2-bench Telecom: no verified public score found for GPT-5.5 Pro (base GPT-5.5: 98.0% original prompts)
- Toolathlon / MCP Atlas: no verified public score found for GPT-5.5 Pro (base GPT-5.5: 55.6% / 75.3%)
- GDPval (44-occupation knowledge work): **82.3%** vs GPT-5.4 Pro 82.0%, GPT-5.5 84.9% (OpenAI)
- Investment Banking Modeling Tasks (internal): **88.6%** vs GPT-5.4 Pro 83.6%, GPT-5.5 88.5% (OpenAI)
- FinanceAgent v1.1 / OfficeQA Pro: no verified public score found for GPT-5.5 Pro

Reasoning / knowledge:

- Humanity's Last Exam: **43.1%** no tools / **57.2%** with tools (vs GPT-5.4 Pro 42.7%/58.7%) (OpenAI)
- GeneBench (multi-stage genetics/bio data analysis): **33.2%** vs GPT-5.4 Pro 25.6%, GPT-5.5 25.0% (OpenAI)
- FrontierMath Tier 1–3: **52.4%**; Tier 4: **39.6%** vs GPT-5.4 Pro 50.0%/38.0% (OpenAI)
- GPQA Diamond / ARC-AGI-1 / ARC-AGI-2: no verified public score found for GPT-5.5 Pro (GPT-5.4 Pro: 94.4% / 94.5% / 83.3%)

Coding:

- SWE-bench Pro (Public): no verified public score found for GPT-5.5 Pro (base GPT-5.5: 58.6%; Claude Opus 4.7 64.3%)
- Terminal-Bench 2.0 / Expert-SWE: no verified public score found for GPT-5.5 Pro (base GPT-5.5: 82.7% / 73.1%)
- `code_interpreter` + `hosted_shell` tools supported; positioned for research-grade work rather than high-volume coding (OpenAI)

Long context:

- 1.05M-token window (docs); no Pro-specific retrieval evals published. Base GPT-5.5 shows a step change in the generation's long-context retrieval: MRCR v2 8-needle 74.0% at 512K–1M (vs GPT-5.4's 36.6%), Graphwalks BFS 45.4% at 1M (vs 9.4%), Graphwalks parents 58.5% at 1M (vs 44.4%) (OpenAI evals).

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 90.1% led OpenAI's launch table and its tool surface is broad (`web_search`, `file_search`, `mcp`, `hosted_shell`, `code_interpreter`), but no Tau2/MCP Atlas/Toolathlon numbers are published for the Pro tier, and its weaker GDPval (82.3%) vs base GPT-5.5 (84.9%) caps it slightly under the 5.4 Pro tier.
- **Reasoning: 85/100.** A consistent step up over GPT-5.4 Pro: GeneBench 33.2% (+7.6), IB modeling 88.6% (+5.0), FrontierMath T4 39.6% (+1.6), HLE 43.1% no-tools (+0.4), BrowseComp SOTA 90.1%, plus a newer Dec 2025 cutoff — capped by still-moderate HLE absolute levels and no published GPQA/ARC-AGI for this tier.
- **Context window: 85/100.** A 1.05M-token window in the top tier by size, and the GPT-5.5 generation's measured retrieval is dramatically stronger than GPT-5.4's at depth (MRCRv2 74.0% at 512K–1M vs 36.6%; Graphwalks BFS 45.4% at 1M vs 9.4%) — no Pro-specific retrieval evals published, so it lands high but not at the top of the band.
- **Multimodal: 65/100.** Text + image input, text-only output; no `computer_use` tool listed for this tier and no verified video or audio input — mid-band.
- **Coding: 70/100.** No SWE-bench Pro, Terminal-Bench, or Expert-SWE numbers published for Pro; coding evidence stays at the family level (base GPT-5.5: SWE-Bench Pro 58.6%, TB2.0 82.7%), with `code_interpreter`/`hosted_shell` available and IB modeling 88.6% as the closest proxy.
- **Cost efficiency: 15/100.** $30/$180 per 1M with no cached-input pricing is ~12x the ~$3/$15 ≈ 60 anchor — deliberately priced for maximum-performance deep reasoning, not volume.
- **Overall Score: 77.0/100.** Mean of 80, 85, 85, 65, 70 (Cost excluded per v4 formula). The deep-reasoning specialist of the GPT-5.5 generation: hard math, scientific analysis, persistent web research, and high-stakes deliverables where minutes-long inference and $30/$180 pricing are acceptable.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.5" launch post evaluations, OpenAI docs model card + API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6.md`, using the same headings.
