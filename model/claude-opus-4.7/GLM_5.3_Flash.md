# Claude Opus 4.7 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 Opus-class flagship — a direct upgrade to Opus 4.6 aimed at hard, long-running software-engineering and agentic knowledge work, with substantially improved high-resolution vision and a new `xhigh` effort level. Positioned below Claude Mythos Preview (which Anthropic keeps limited) and later superseded by Opus 4.8 (2026-05-28).
- **Provider / access:** Anthropic API `claude-opus-4-7` (Chat/messages API), also Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry. Not listed on the live OpenCode Zen roster (`/zen/v1/models`, fetched 2026-10-16) — no Free ID on Zen.
- **Release / knowledge:** released 2026-04-16 (Anthropic announcement); knowledge cutoff 2026-01-01 (Artificial Analysis model listing).
- **IDs:** `claude-opus-4-7` (Anthropic API); no `opencode/` Free ID exists.
- **Context window:** 1M total; max output 128K (Anthropic/Vertex provider rows on llm-stats; consistent with the 1M figure on Artificial Analysis and AI Release Tracker). Verified across three independent trackers plus the official announcement's migration notes.
- **Modalities:** text + image in (up to 2,576 px long edge ≈ 3.75 MP — over 3× prior Claude vision); text out; reasoning yes (effort levels low→max plus new `xhigh`); tool calls yes (MCP-Atlas 79.1%); JSON mode not explicitly confirmed in sources consulted.
- **Pricing (as of 2026-10-16):** paid only — $5.00 in / $25.00 out / $0.50 cached-in per 1M tokens (cache write $6.25 5-min / $10.00 1-hr), verified against platform.claude.com pricing by AI Release Tracker on 2026-08-18. Same price as Opus 4.6. No free tier; no data-usage caveats beyond standard Anthropic API terms.
- **Architecture:** proprietary; parameter count undisclosed. Closed weights. Anthropic notes deliberately constrained cyber capabilities plus automatic safeguards blocking high-risk cybersecurity requests.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **79.1%** (lab-reported, AI Release Tracker)
- Terminal-Bench 2.1: **66.1%** (lab, Terminus-2-style harness; TB 2.0: **69.4%**)
- OSWorld-Verified: **78%** (lab)
- BrowseComp: **79.3%** (lab)
- GDPval-AA: **Elo 1753**, win/tie vs human experts **80.3%** — Anthropic states state-of-the-art at release (lab)
- Finance Agent v2: **51.5%** — Anthropic states state-of-the-art at release (lab)
- CyberGym: **73.1%** (lab, updated 4.6 harness)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (lab)
- HLE: **46.9%** no tools / **54.7%** with tools (lab)
- ARC-AGI-2: **75.8%** (lab)
- FrontierMath: **43.8%** Tier 1–3 / **22.9%** Tier 4 (lab)
- BullshitBench v2: **83%** (independent, github.com/petergpt)
- Artificial Analysis Intelligence Index: **41 (estimated, Max variant)** / 31 (non-reasoning, high) — independent estimate, no verified independent run yet; ranked among top proprietary models of its week (AA)

Coding:

- SWE-bench Verified: **87.6%** (lab, via BenchLM retrieval)
- SWE-bench Pro: **64.3%** (lab; vs GPT-5.4 57.7% and Gemini 3.1 Pro 54.2% per BuildFastWithAI comparison)
- SWE-bench Multilingual: **80.5%** (lab)
- CursorBench: **>70%** (Cursor CEO quote in official announcement; Opus 4.6: 58%)
- Next.js Evals: **58%** (Vercel, independent)
- BigLaw Bench: **90.9%** at high effort (Harvey, independent partner eval in official announcement)
- ProgramBench: **0%** (independent, mini-SWE-agent harness — a notable outlier worth flagging)

Long context:

- MRCR v2 (8-needle, 128k avg): **59.3%** (lab) — solid but imperfect needle retrieval at 128K despite the 1M window; no published MRCR/RULER number at the full 1M window

### Normalized scores (1–100)

- **Tool use: 90/100.** MCP-Atlas 79.1%, Terminal-Bench 2.1 66.1%, OSWorld 78%, BrowseComp 79.3%, and state-of-the-art GDPval-AA (Elo 1753) at release cap it just below the Opus 4.8/5 tier; partner evals report one-third the tool errors of 4.6.
- **Reasoning: 89/100.** GPQA Diamond 94.2% and ARC-AGI-2 75.8% are elite; HLE 46.9% (no tools) and FrontierMath Tier 4 22.9% show it still below Mythos-class frontier reasoning.
- **Context window: 90/100.** 1M-token window (top tier) verified by three trackers, but MRCR v2 8-needle 59.3% at 128K average means measured retrieval is good-not-perfect at depth.
- **Multimodal: 80/100.** Image-in only, but the ~3.75 MP vision upgrade is real: MMMU-Pro 75.2%, CharXiv Reasoning 82.1%, XBOW visual-acuity 98.5% (vs 54.5% for 4.6). No audio or video I/O caps it.
- **Coding: 92/100.** SWE-bench Verified 87.6% / Pro 64.3% / Multilingual 80.5% led its release cohort, CursorBench 70%+, Harvey BigLaw 90.9%; the independent ProgramBench 0% outlier and successors (Opus 4.8, 5.x) keep it from 95+.
- **Cost efficiency: 32/100.** $5/$25 per 1M is premium frontier pricing; the 1M window and 90% cache discount soften it, but cheaper 4.6-tier rivals exist.
- **Overall Score: 88/100.** Mean of (90+89+90+80+92)/5 = 87.8 → 88. Best fit: hard, long-horizon agentic coding and document/finance knowledge work where premium reliability justifies $5/$25; not the pick for tight budgets or audio/video work.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (official Anthropic announcement + three independent trackers: llm-stats, Artificial Analysis, AI Release Tracker; conflicting figures cross-checked — none found); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
