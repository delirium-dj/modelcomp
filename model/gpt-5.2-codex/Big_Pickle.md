# GPT-5.2 Codex - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's Codex-optimized derivative of GPT-5.2 (2026-01-14), built for
  long-horizon agentic software engineering - multi-file refactors, migrations, feature builds,
  code review and defensive security work - with native context compaction so multi-hour sessions
  do not lose task state. It is a separate id from `gpt-5.2`, not an alias.
- **Provider / access:** OpenAI API `gpt-5.2-codex` (Responses API; the default snapshot is a
  rolling `gpt-5.2-codex` alias that OpenAI says "is regularly updated", so scores pin to the
  2026-01-14 launch behaviour, not a frozen snapshot). Also served on Azure/OpenRouter
  (`openai/gpt-5.2-codex`) and **on OpenCode Zen as `opencode/gpt-5.2-codex`** (id present in the
  live Zen catalogue, checked 2026-10-22).
- **Release / knowledge:** Released 2026-01-14 (Codex-optimized follow-up promised in the
  2025-12-11 GPT-5.2 launch post). Knowledge cutoff **2025-08-31**. Reasoning effort: low /
  medium / high / xhigh.
- **IDs:** `gpt-5.2-codex` (OpenAI), `openai/gpt-5.2-codex` (OpenRouter), `opencode/gpt-5.2-codex`
  (OpenCode Zen). Sibling ids: `gpt-5.2` (Thinking), `gpt-5.2-pro`, `gpt-5.2-chat-latest`.
- **Context window:** **400,000 tokens** total, **272,000 max input tokens**, **128,000 max output
  tokens** (official model page - note the max-input cap is lower than the nominal window).
  Cached input supported at $0.175 per 1M.
- **Modalities:** Input text and image (screenshots for UI work; some gateways also accept PDF),
  output text. Tool calling, structured outputs, image input and reasoning tokens.
- **Pricing (as of 2026-10-22):** **$1.75 input / $0.175 cached / $14.00 output per 1M tokens**
  (official model page; identical to GPT-5.2 Thinking). No free tier; Azure and OpenRouter forward
  to the same weights.
- **Architecture:** Proprietary, API-only; parameter count undisclosed. Same GPT-5.2 family
  envelope, re-tuned for agentic coding and extended autonomous runs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (official, Codex harness): **64.0%** (base GPT-5.2 62.2%).
- Terminal-Bench Hard (Artificial Analysis, independent): **37.1%** (xhigh).
- τ²-Bench Telecom (Artificial Analysis, independent): **92.1%** (xhigh).
- APEX Agents (Epoch AI, independent): **27.6%** (+3.0 pts vs average).
- BrowseComp / OSWorld / AutomationBench / Toolathlon / MCP-Atlas / JobBench: no verified public
  score found for this model.
- ALE-Bench (Epoch AI, independent): **1299.9** Elo (+384.5 vs average).
- Claw-Eval / Agents' Last Exam: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond (Artificial Analysis): **89.9%** (xhigh).
- HLE (Artificial Analysis): **35.7%**.
- IFBench (instruction following, Artificial Analysis): **77.6%**.
- AA-LCR v1.1 (long-context reasoning, Artificial Analysis): **82.3%**.
- CritPt (Artificial Analysis): **8.7%**.
- AA-Omniscience: accuracy **41.1%**, non-hallucination rate **26.6%**.
- Artificial Analysis Intelligence Index: **28.5** as mirrored by OpenRouter - flagged as a
  scale conflict, because the same vendor's index was in the 70s for GPT-5.2 (High) at launch
  (see conflicts).
- GPQA / HLE / CritPt are the only academic-reasoning numbers published for this id; no MMLU-Pro,
  AIME, FrontierMath or ARC-AGI row exists for it.

Coding:

- SWE-Bench Pro (official): **56.4%** (base GPT-5.2 55.6%).
- SWE-bench Verified (Vals AI mini-SWE-agent, independent): **72.4%**.
- LiveCodeBench (Vals AI, independent): **88.0%**.
- Vibe Code Bench v1.1 (Vals AI, independent): **37.9%** - end-to-end web-app delivery; the weak
  spot in an otherwise strong coding profile.
- Terminal-Bench 2.0 (official): **64.0%**; Terminal-Bench Hard (AA): **37.1%**.
- Design Arena agents (independent): Web apps 1051 Elo, Full Stack 993, Mobile apps 1090, Android
  native 1176, Godot game dev 1142; WebDev Arena 1338.3 Elo.
- DeepSWE 1.1 / SciCode / SWE-Atlas / SWE-bench Multilingual: no verified public score found for
  this id.

Long context:

- 400,000-token window with a **272,000 max-input** cap and 128,000 max output (official).
- AA-LCR v1.1: **82.3%** (independent long-context reasoning over the published window).
- Context compaction is a product feature (compresses earlier turns while preserving task state),
  not a measured retrieval score; no MRCRv2 / RULER / GraphWalks number is published for Codex
  (the family's MRCRv2 table belongs to GPT-5.2 Thinking).
- No long-context premium is documented; cached input is billed at $0.175/1M.

### Normalized scores (1-100)

- **Tool use: 72/100.** τ²-Bench Telecom 92.1% and ALE-Bench 1299.9 Elo show strong agentic tool
  calling, and Terminal-Bench 2.0 at 64.0% clears the mid band; but Terminal-Bench Hard is only
  37.1%, APEX Agents is 27.6%, and there is no published BrowseComp, OSWorld, AutomationBench or
  MCP-Atlas number for this id, so the tool-use band stays below the 80+ frontier cluster.
- **Reasoning: 72/100.** GPQA Diamond 89.9% sits just under the 90% frontier line, HLE 35.7% is
  below the 40% reference, CritPt 8.7% is weak and AA-Omniscience non-hallucination is only 26.6%;
  AA-LCR 82.3% and IFBench 77.6% are the strong points, and no MMLU-Pro, AIME, FrontierMath or
  ARC-AGI number exists for this coding-tuned variant, so it cannot borrow the Thinking tier's
  math/abstract-reasoning results.
- **Context window: 78/100.** 400,000 total with 128,000 max output is in the 200K-500K band
  (65-84) near its top; the 272,000 max-input cap and the absence of a published needle-retrieval
  result at long range keep it out of the 85+ band, and context compaction is a product feature
  rather than a measured capability.
- **Multimodal: 70/100.** Text and image input (screenshots for UI work) with text output is the
  top of the "+image in" band (60-70); there is no video, audio or non-text output, and no
  MMMU-Pro/CharXiv score is published for this id, so it cannot be credited with the stronger
  family vision numbers.
- **Coding: 82/100.** SWE-Bench Pro 56.4% (official), SWE-bench Verified 72.4% and LiveCodeBench
  88.0% (Vals AI) and Terminal-Bench 2.0 64.0% are a strong agentic-coding profile, and the
  Codex-specific context compaction is exactly what long refactors need; the deductions are Vibe
  Code Bench at only 37.9% (weak end-to-end app delivery), Terminal-Bench Hard 37.1%, and the
  missing DeepSWE/SciCode/SWE-Atlas rows that the frontier coding band requires.
- **Cost efficiency: 68/100.** $1.75 input / $0.175 cached / $14 output per 1M is 40% above
  GPT-5.1 but below the $3/$15 (~60) reference once the 90% cache discount is applied to the
  long, repeated system prompts and repo context that Codex sessions actually use; there is no
  free tier, and reasoning tokens bill at the output rate, which keeps it under the ~$1.25/$4.25
  (~88) Pareto leaders.
- **Overall Score: 75/100.** A purpose-built long-horizon coding agent with an excellent
  SWE-Bench Pro and LiveCodeBench profile and a price half that of Pro, but its reasoning metrics
  are a clear step below GPT-5.2 Thinking/Pro, end-to-end app delivery is weak (Vibe Code Bench
  37.9%), and its 400K/272K-in window is a generation behind the 1M-context 2026 frontier.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: public internet research, cross-checked across four source classes - (1) official OpenAI
  material: the model page `developers.openai.com/api/docs/models/gpt-5.2-codex` (id, rolling
  snapshot, 400,000 context, 272,000 max input, 128,000 max output, 2025-08-31 cutoff, $1.75 /
  $0.175 / $14 pricing, text+image input, effort levels) and the GPT-5.2 launch post (which
  promised the Codex variant, gave the family price table and the Thinking-tier benchmark table);
  (2) independent trackers: Artificial Analysis via OpenRouter's benchmark table and the AA
  leaderboard mirror (Intelligence Index 28.5, GPQA 89.9%, HLE 35.7%, IFBench 77.6%, τ²-Bench
  Telecom 92.1%, AA-LCR 82.3%, CritPt 8.7%, TB Hard 37.1%, AA-Omniscience 41.1/26.6), Vals AI
  (SWE-bench 72.4%, LiveCodeBench 88.0%, Vibe Code Bench v1.1 37.9%) and Epoch AI (ALE-Bench
  1299.9, APEX Agents 27.6%, Terminal Bench 2 66.5%); (3) launch coverage and mirror rows used to
  cross-check the vendor numbers: OpenRouter (released 2026-01-14, Azure host, 3.14 s latency),
  llm-stats.com, Puter's model card (text/image/PDF input), Digital Applied's guide (SWE-Bench Pro
  56.4%, Terminal-Bench 2.0 64.0%, context compaction) and Design Arena Elo rows; (4) the live
  OpenCode Zen catalogue (`https://opencode.ai/zen/v1/models`) which confirms
  `opencode/gpt-5.2-codex` is actually served, while the folder's placeholder meta ("128K total",
  "Text in/out", "Standard pricing") is contradicted by the official 400K/272K-in, text+image,
  $1.75/$14 specs. Conflicts are reported side by side: Terminal-Bench 2.0 64.0% (official Codex
  harness) vs Terminal-Bench Hard 37.1% (AA) vs Epoch's "Terminal Bench 2 66.5%"; SWE-bench
  Verified 72.4% (Vals mini-SWE-agent) vs 80.0% for GPT-5.2 Thinking under OpenAI's own harness;
  and the mirrored "Intelligence Index 28.5", which cannot be on the same scale as AA's 73 for
  GPT-5.2 (High) at launch - treated as an unscaled/older index and given no weight beyond the
  component benchmarks. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
