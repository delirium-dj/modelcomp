# GPT-5.4 Pro — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.4-pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's "maximum performance on complex tasks" deep-reasoning tier of the GPT-5.4 family — uses more compute to think harder, targeting professional knowledge work, hard math/science, and persistent web research rather than high-volume coding.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro`; OpenAI API `gpt-5.4-pro` — **Responses API only** (no Chat Completions, no Batch); background mode recommended since requests can take several minutes.
- **Release / knowledge:** Released 2026-03-05 alongside GPT-5.4; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-pro`, pinned snapshot `gpt-5.4-pro-2026-03-05`; `opencode/gpt-5.4-pro` on Zen.
- **Context window:** 1,050,000 total (1.05M); 128,000 max output (verified from OpenAI docs model card; prompts >272K input tokens are billed at 2x input / 1.5x output).
- **Modalities:** text + image in; text out; reasoning effort medium (default)/high/xhigh; tool calls incl. `function_calling`, `web_search`, `file_search`, `tool_search`, `image_generation`, `apply_patch`, `computer_use`, `mcp`.
- **Pricing (as of 2026-09-30):** input $30 / output $180 per 1M, no cached-input pricing (OpenAI docs). Regional-processing endpoints carry a 10% uplift.
- **Architecture:** proprietary.

### Raw benchmarks found

> Verified via public web research: OpenAI "Introducing GPT-5.4" launch post (March 5, 2026) evaluations tables and OpenAI docs model card. Evals run at reasoning effort xhigh unless noted. OpenAI did not publish SWE-bench Pro, Terminal-Bench, OSWorld, Tau2, Toolathlon, or MCP Atlas numbers for the Pro tier (all "—" in their table).

Agent / tool use:

- BrowseComp: **89.3%** — new state of the art at launch vs GPT-5.4 82.7%, GPT-5.2 65.8% (OpenAI, ChatGPT search tool with blocklist)
- Tau2-bench Telecom: no verified public score found for GPT-5.4 Pro
- Toolathlon / MCP Atlas: no verified public score found for GPT-5.4 Pro
- FinanceAgent v1.1: **61.5%** vs GPT-5.4 56.0%, GPT-5.2 59.5% (OpenAI)
- GDPval (44-occupation knowledge work): **82.0%** vs GPT-5.4 83.0%, GPT-5.2 70.9% (OpenAI; Pro slightly below the base model here)
- Investment Banking Modeling Tasks (internal): **83.6%** vs GPT-5.4 87.3%, GPT-5.2 68.4% (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** vs GPT-5.4 92.8%, GPT-5.2 92.4% (OpenAI)
- Humanity's Last Exam: **42.7%** no tools / **58.7%** with tools (vs GPT-5.4 39.8%/52.1%) (OpenAI)
- ARC-AGI-1 (Verified): **94.5%**; ARC-AGI-2 (Verified): **83.3%** vs GPT-5.4 93.7%/73.3% (OpenAI)
- FrontierMath Tier 1–3: **50.0%**; Tier 4: **38.0%** vs GPT-5.4 47.6%/27.1% (OpenAI)
- Frontier Science Research: **36.7%** vs GPT-5.4 33.0% (OpenAI)

Coding:

- SWE-bench Pro (Public): no verified public score found for GPT-5.4 Pro (— in OpenAI table)
- Terminal-Bench 2.0: no verified public score found for GPT-5.4 Pro
- `apply_patch` tool supported; positioned for complex knowledge work rather than high-volume coding (OpenAI docs)

Long context:

- 1.05M-token window (docs); no Pro-specific retrieval evals published. Base GPT-5.4 MRCR v2 8-needle at 256K–512K is 57.5% and 512K–1M 36.6%, Graphwalks BFS 256K–1M 21.4% — long-range retrieval in this family degrades sharply beyond 256K (OpenAI evals).

Computer use / vision (base GPT-5.4 family, for context):

- OSWorld-Verified 75.0% (base), WebArena-Verified 67.3%, Online-Mind2Web 92.8%, MMMU Pro 81.2% no tools / 82.1% with tools; Pro supports `computer_use` and full-fidelity `original` image detail (up to 10.24M pixels) (OpenAI)

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 89.3% was SOTA at launch and FinanceAgent leads its family; `tool_search`/`computer_use`/`mcp` support is broad, but no Tau2/Toolathlon/MCP Atlas numbers are published for Pro, capping it just under the base GPT-5.4 (Tau2 98.9%, MCP Atlas 67.2%).
- **Reasoning: 84/100.** GPQA 94.4%, HLE 42.7/58.7, ARC-AGI-2 83.3% (a +10-point jump over base), FrontierMath T4 38.0%, and Frontier Science 36.7% make this the deepest-reasoning OpenAI mainline model of its generation — capped only by still-moderate HLE and Frontier Science absolute levels.
- **Context window: 80/100.** A 1.05M-token window puts it in the top tier by raw size, but measured retrieval in this family (MRCRv2 36.6% at 512K–1M; Graphwalks BFS 21.4% at 256K–1M) shows usable long-range performance is far weaker beyond ~256K — no Pro-specific retrieval evals to confirm otherwise.
- **Multimodal: 68/100.** Text + image input, text-only output; strong screenshot-based computer use and full-fidelity `original` image detail in the family, but no verified video or audio input — mid-to-upper band.
- **Coding: 70/100.** No SWE-bench Pro or Terminal-Bench numbers published for Pro; `apply_patch` is supported and IB spreadsheet modeling reaches 83.6%, but its design target is complex knowledge work, so coding evidence stays at the family level (base GPT-5.4: SWE-Bench Pro 57.7%).
- **Cost efficiency: 15/100.** $30/$180 per 1M with no cached-input pricing is ~12x the ~$3/$15 ≈ 60 anchor — deliberately priced for maximum-performance deep reasoning, not volume.
- **Overall Score: 76.8/100.** Mean of 82, 84, 80, 68, 70 (Cost excluded per v4 formula). The deep-reasoning specialist of the GPT-5.4 generation: hard math, science, persistent web research, and high-stakes professional deliverables where minutes-long inference and $30/$180 pricing are acceptable.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4" launch post evaluations, OpenAI docs model card + API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
