# GPT-5.4 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (Thinking; Pro variant at `gpt-5.4-pro`)
- **Short description:** OpenAI's March 2026 flagship reasoning model unifying the Codex and GPT lines — native computer use that surpasses human performance on OSWorld, tool search that cuts agent token usage by 47%, and a 1M-token context window. Best for professional knowledge work and long-horizon agentic execution.
- **Provider / access:** OpenAI API (`gpt-5.4`, Responses and Chat Completions; Pro at `gpt-5.4-pro`); ChatGPT (Plus/Team/Pro), Codex with 1M-context experimental mode; Batch/Flex at 50%, Priority at 2x. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not verified.
- **IDs:** `gpt-5.4` (OpenAI API); `gpt-5.4-pro` (Pro variant).
- **Context window:** 1,000,000 total tokens in Codex (272K standard window; 2x billing beyond; 922K input / 128K output per tracker listings — verified via OpenAI launch coverage and llm-stats).
- **Modalities:** text and image input (image detail levels original/high); text output; native computer use (Playwright code + screenshot-based mouse/keyboard); reasoning yes (xhigh default in evals, Pro variant); tool calls with tool search (lightweight tool list, on-demand definitions); JSON mode.
- **Pricing (as of 2026-09-24):** $2.50 / $15.00 per 1M in/out; cached input $0.25 per 1M; Batch/Flex 50%, Priority 2x; requests over 272K context billed at 2x. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed; most token-efficient OpenAI reasoning model at release (fewer tokens than GPT-5.2 for equivalent tasks).

### Raw benchmarks found

Agent / tool use:

- GDPval (wins or ties vs human professionals): **83.0%** (OpenAI launch reporting, 44 occupations across top 9 US industries)
- OSWorld-Verified (desktop): **75.0%** (vs human baseline 72.4% — surpasses human performance)
- MCP Atlas: **67.2%** (OpenAI table; 47% token reduction with tool search on 250 tasks/36 MCP servers)
- Toolathlon: **54.6%** (OpenAI table; vs GPT-5.2's 45.7%)
- BrowseComp: **82.7%** (Pro: **89.3%**, state of the art)
- τ2-bench Telecom (no reasoning): **64.3%**
- Terminal-Bench 2.0: **75.1%** (OpenAI table; below GPT-5.3-Codex's 77.3%)
- WebArena-Verified: **67.3%**; Online-Mind2Web: **92.8%**
- Tau3-Banking, GDPval-AA Elo, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI table, xhigh; Pro 94.4%)
- HLE (with tools): **52.1%** (OpenAI table; Pro 58.7%)
- ARC-AGI-2 (Verified): **73.3%** (Pro 83.3%); ARC-AGI-1: **93.7%**
- FrontierMath Tier 1-3: **47.6%**; Tier 4: **27.1%** (Pro 38.0%)
- Frontier Science Research: **33.0%**
- OfficeQA: **68.1%** (vs GPT-5.2's 63.1%)
- MMMU Pro (no tools): **81.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found (33% fewer false claims vs GPT-5.2, vendor-reported)
- LCR / MLCR, CritPt: no verified public score found

Coding:

- SWE-bench Pro (Public): **57.7%** (OpenAI table; matches/exceeds GPT-5.3-Codex's 56.8%)
- Terminal-Bench 2.0: **75.1%** (as above)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR: **86.0%** through 128K; **36.6%** at 512K–1M (OpenAI reporting)
- Graphwalks BFS: **93.0%** at 0–128K; **21.4%** at 256K–1M (Graphwalks parents: 32.4% at 256K–1M)

### Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 82.7% (Pro 89.3% SOTA), GDPval 83.0% matching professionals, OSWorld 75.0% surpassing the human baseline and the 47%-token-reduction tool search all clear the frontier references; Terminal-Bench 2.0 75.1% trails GPT-5.3-Codex slightly, keeping it under 95.
- **Reasoning: 92/100.** GPQA Diamond 92.8%, HLE 52.1% (with tools) and ARC-AGI-2 73.3% all exceed the frontier refs (GPQA 90%+, HLE 40%+); docked for the unverified-vendor-harness caveats and no independent index run.
- **Context window: 92/100.** 1M tokens maps to the ≥1M tier (95–100) but measured retrieval degrades sharply at the far end (MRCR 36.6%, Graphwalks BFS 21.4% at 512K–1M), docking it below 95.
- **Multimodal: 68/100.** Text + image input with strong visual understanding (MMMU Pro 81.2%, Online-Mind2Web 92.8%) and screenshot-driven computer use; no native audio/video or PDF input — image-in band is 60–70.
- **Coding: 82/100.** SWE-bench Pro 57.7% and Terminal-Bench 2.0 75.1% are solid mid-frontier; no SWE-bench Verified/LiveCodeBench numbers found, which caps it.
- **Cost efficiency: 72/100.** $2.50/$15.00 per 1M sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed near the lower-middle at 72; Batch/Flex at 50% and 47% lower tool-search token usage are partial offsets.
- **Overall Score: 85/100.** Mean of the five quality dims (90 + 92 + 92 + 68 + 82) / 5 = 84.8 → 85. Best-fit: the strongest general-purpose choice for professional knowledge work, computer-use agents and long-horizon tool ecosystems where output quality trumps token price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (OpenAI launch coverage via Digital Applied with full benchmark tables, llm-stats model page, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
