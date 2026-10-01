# GPT-5.2 — findings by Kimi K3

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking; API `gpt-5.2`)
- **Short description:** OpenAI's Dec-2025 frontier series for professional knowledge work and long-running agents; sets state of the art on GDPval, SWE-bench Verified, FrontierMath T1–3, Tau2-bench Telecom, and MRCRv2 long-context retrieval. API line also offers `gpt-5.2-chat-latest` (Instant) and `gpt-5.2-pro`.
- **Provider / access:** OpenAI API (Responses + Chat Completions), Codex; ChatGPT (Instant/Thinking/Pro) on Plus, Pro, Go, Business, Enterprise. Fifth reasoning effort `xhigh` supported on Thinking/Pro; new Responses `/compact` endpoint extends effective context for tool-heavy runs.
- **Release / knowledge:** Released 2025-12-11 (official announcement).
- **IDs:** `openai/gpt-5.2` (Thinking), `gpt-5.2-chat-latest` (Instant), `gpt-5.2-pro` (Pro, Responses API). No Free ID exists on OpenCode Zen.
- **Context window:** GPT-5 series platform window: 272K input / 128K output / 400K total (per the GPT-5 developer post; long-context evals published to 256K); `/compact` endpoint extends beyond-window workflows.
- **Modalities:** Text + image in (video understanding via VideoMMMU-style frame evaluation); text out. Reasoning efforts none/low/medium/high/xhigh; `verbosity`; custom tools; apply_patch / shell tools; Structured Outputs; parallel tool calling.
- **Pricing (as of 2026-10-01):** `gpt-5.2` $1.75 / $14 per MTok (cached input $0.175, 90% off); `gpt-5.2-pro` $21 / $168 per MTok (official pricing table). Paid; ChatGPT subscriptions unchanged.
- **Architecture:** Proprietary; parameter count undisclosed. Trained with Microsoft Azure + NVIDIA (H100/H200/GB200-NVL72) infrastructure per announcement.

### Raw benchmarks found

All numbers from OpenAI's official "Introducing GPT-5.2" (2025-12-11), GPT-5.2 Thinking (xhigh) column unless noted.

Agent / tool use:

- Tau2-bench Telecom: **98.7%** (SOTA); Tau2-bench Retail: **82.0%**
- Scale MCP-Atlas: **60.6%**; Toolathlon: **46.3%**; BrowseComp (agentic, no search restriction): **65.8%** (Pro 77.9%)
- GDPval (knowledge work, 44 occupations): wins-or-ties **70.9%** (vs industry professionals), clear wins 49.8%, no-ties 61.0%; >11× speed at <1% cost of experts (vendor claim)
- Internal investment-banking spreadsheet tasks: **68.4%** (vs GPT-5.1 59.1%)
- Terminal-Bench 2.1 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (no tools; Pro 93.2%)
- HLE: **34.5%** no tools / **45.5%** with search+Python (Pro 36.6%/50.0%)
- AIME 2025: **100.0%**; HMMT Feb 2025: **99.4%**; FrontierMath Tier 1–3: **40.3%** (SOTA), Tier 4: **14.6%**
- ARC-AGI-1 (Verified): **86.2%** (Pro 90.5%); ARC-AGI-2 (Verified): **52.9%** (SOTA for chain-of-thought models; Pro 54.2%)
- MMMLU: **89.6%**
- Factuality (internal, ChatGPT answers w/o errors): **93.9%** with search / **88.0%** without (30% relative fewer error responses vs GPT-5.1)

Coding:

- SWE-bench Verified: **80.0%** (SOTA); SWE-Bench Pro (public): **55.6%** (SOTA); SWE-Lancer IC Diamond: **74.6%** (40/237 problems omitted, infra)

Long context:

- OpenAI MRCRv2 (8 needles): **98.2%** @4–8K, **89.3%** @8–16K, **95.3%** @16–32K, **92.0%** @32–64K, **85.6%** @64–128K, **77.0%** @128–256K; near-100% on the 4-needle variant out to 256K (first model claimed)
- BrowseComp Long Context: **92.0%** @128K / **89.8%** @256K; GraphWalks BFS <128K **94.0%**, parents <128K **89.0%**

Multimodal (raw): CharXiv reasoning **88.7%** (w/ Python; 82.1% no tools); MMMU Pro **80.4%** (w/ Python); VideoMMMU **85.9%** (no tools); ScreenSpot Pro **86.3%** (w/ Python) — ~50% lower error rates than predecessors on chart/GUI understanding (vendor claim).

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 Telecom 98.7% (SOTA), Retail 82%, plus MCP-Atlas 60.6%/Toolathlon 46.3% and GDPval expert-level knowledge work clear the 90+ frontier tool-use references; small hair off for the absence of Terminal-Bench 2.1/Claw-Eval numbers.
- **Reasoning: 93/100.** GPQA 92.4%, HLE 34.5% (45.5% tooled), ARC-AGI-2 52.9%, and FrontierMath T1–3 40.3% are all at or above the frontier reference lines (GPQA 90+, HLE 40% w/ tools, Index-class leadership).
- **Context window: 82/100.** A 400K-total window sits in the 200K–500K tier (65–84), but near-100% 4-needle MRCRv2 @256K and 77% @8-needle/256K plus GraphWalks 94% put it at the very top of that tier, just short of the ≥1M band.
- **Multimodal: 82/100.** Strong measured image/chart/GUI understanding (CharXiv 88.7, ScreenSpot Pro 86.3, MMMU-Pro 80.4) and video-frame evaluation (VideoMMMU 85.9) place it mid/upper image+video-in band; no audio input and text-only output cap it.
- **Coding: 92/100.** SWE-bench Verified 80.0% and SWE-Bench Pro 55.6% (both SOTA at release) plus SWE-Lancer 74.6% meet the 90–100 frontier coding references; capped by the absence of published LiveCodeBench/SciCode numbers for this version.
- **Cost efficiency: 70/100.** $1.75/$14 per MTok sits between the ~$1.25/$4.25 → 88 and $3/$15 → 60 references; OpenAI's own agentic-eval cost-per-quality claim and 90% cached-input discount mitigate but don't erase the $14 output price.
- **Overall Score: 88/100.** Half-up mean of the five quality dims: (92 + 93 + 82 + 82 + 92) / 5 = 88.2 → 88. Best fit: frontier professional/agentic work — knowledge-work artifacts (GDPval), long-document analysis, agentic coding — where quality-per-dollar beats cheaper tiers; only Pro-tier pricing competes above it.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.2", 2025-12-11, incl. appendix detailed benchmarks and pricing table; GPT-5 developer post for series context window); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
