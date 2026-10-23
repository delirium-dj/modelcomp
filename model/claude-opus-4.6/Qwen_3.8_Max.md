# Claude Opus 4.6 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's early-2026 flagship and the **first Opus-class model with a 1M-token context window** (beta), built for sustained agentic work — it plans more carefully, runs longer without degrading, operates reliably in massive codebases and catches its own mistakes. Its headline leaps are **abstract reasoning (ARC-AGI-2 68.8%, nearly double Opus 4.5)** and **agentic search/computer use**, alongside new Claude Code **Agent Teams** (swarms) and **Effort Tuning**. The main regression is scaled multi-tool coordination (MCP Atlas).
- **Provider / access:** Anthropic API (`claude-opus-4-6`), claude.ai, Amazon Bedrock, Google Cloud Vertex AI. Default model for Claude Code users on the Max plan. US-only inference option at 1.1x pricing for data residency.
- **Release / knowledge:** Released **2026-02-05**. Knowledge cutoff not stated in the sources reviewed.
- **IDs:** `claude-opus-4-6` (predecessor `claude-opus-4-5`; successors Opus 4.7 / 4.8 / 5).
- **Context window:** **200K standard, 1M via beta header** (first Opus with 1M); **128K output tokens**; **Context Compaction (beta)** auto-summarizes older context for long-running agents. Dramatically reduced "context rot" — **MRCR v2 8-needle 1M ≈ 76%** vs Sonnet 4.5's 18.5%.
- **Modalities:** text + image (vision) in → text out; **no audio/video**. Reasoning via **Adaptive Thinking / Effort Tuning** (four levels: Low / Medium / High [default] / Max); full tool use, computer use, MCP, Agent Teams.
- **Pricing (as of 2026-10-23):** **$5 input / $25 output** per 1M tokens (unchanged from Opus 4.5); **prompts > 200K tokens: $10 / $37.50** per 1M. Premium flagship tier (same slot as Opus 4.7/4.8, GPT-5.6 Sol, Opus 5).
- **Architecture:** Undisclosed proprietary; safety profile matches/exceeds Opus 4.5 with the lowest over-refusal rate among recent Claudes and six new cybersecurity probes.

### Raw benchmarks found

Agentic coding & tool use (Anthropic vendor-run, via Vellum / ClaudeWorld):

| Benchmark | **Opus 4.6** | Opus 4.5 | Sonnet 4.5 | Gemini 3 Pro | GPT-5.2 |
| --- | --- | --- | --- | --- | --- |
| Terminal-Bench 2.0 | **65.4%** | 59.8% | 51.0% | 56.2% | 64.7% (Codex CLI) |
| SWE-bench Verified | **80.8%** | 80.9% | 77.2% | 76.2% | 80.0% |
| OSWorld (computer use) | **72.7%** | 66.3% | 61.4% | — | — |
| τ2-bench Retail | **91.9%** | 88.9% | 86.2% | 85.3% | 82.0% |
| τ2-bench Telecom | **99.3%** | 98.2% | 98.0% | 98.0% | 98.7% |
| MCP Atlas (scaled tools) | **59.5%** ↓ | 62.3% | 43.8% | 54.1% | 60.6% |
| BrowseComp (agentic search) | **84.0%** | 67.8% | 43.9% | 59.2% | 77.9% (Pro) |

Reasoning / knowledge:

- **ARC-AGI-2 (novel problem-solving): 68.8%** — nearly double Opus 4.5's 37.6%, above GPT-5.2 Pro (54.2%) and Gemini 3 Pro (45.1%); one of the largest single-benchmark leaps in a frontier update
- **HLE (no tools / with tools): 40.0% / 53.1%** — leads GPT-5.2 (36.6/50.0), Gemini 3 Pro (37.5/45.8) and Opus 4.5 (30.8/43.4) on both
- **GPQA Diamond: 91.3%** — +4.3pp over Opus 4.5, just below GPT-5.2 Pro (93.2%) and Gemini 3 Pro (91.9%)
- **MMMLU: 91.1%** (near-parity with Gemini 3 Pro 91.8%); **GDPVal-AA Elo 1606** (leads GPT-5.2 1462 by 144); **Finance Agent 60.7%** (best-in-class); BigLaw Bench 90.2% (40% perfect); 2x Opus 4.5 on computational/structural biology, organic chemistry, phylogenetics; leads all competitors on cybersecurity vulnerability detection

Multimodal:

- **MMMU Pro 73.9% (no tools) / 77.3% (with tools)** — steady but incremental (+3.3pp over Opus 4.5), trailing Gemini 3 Pro (81.0%) and GPT-5.2 (79.5/80.4)

Long context:

- **MRCR v2: 93.0% at 256K / 76.0% at 1M** — reliable recall at extreme length where Gemini 3 Pro degrades more noticeably

New capabilities: **Agent Teams** (research preview — a lead agent spawns independent teammates that message each other and share a dependency-tracked task list; higher token cost than sub-agents) and **Effort Tuning** (Low/Medium/High/Max).

> Provenance: All figures are **Anthropic vendor-run**, reproduced by Vellum's "Claude Opus 4.6 vs 4.5 Benchmarks" (2026-02-05) and ClaudeWorld's Opus 4.6 deep-dive (2026-02-06); the two agree on every shared cell. Comparison columns (Opus 4.5, Sonnet 4.5, Gemini 3 Pro, GPT-5.2) are Anthropic's runs of those models, so cross-vendor margins carry the usual vendor-harness caveat. Per methodology these are treated as an upper bound and discounted against neutral harnesses (Artificial Analysis, Vals, LiveBench). The **MCP Atlas regression (62.3 → 59.5)** is corroborated by both sources and is the model's clearest weakness (scaled multi-tool coordination). No independent Artificial Analysis index for Opus 4.6 surfaced in the sources reviewed. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 87/100.** Elite tool orchestration on the vendor numbers — **τ2-bench Retail 91.9% / Telecom 99.3%** (strongest of the field), **BrowseComp 84.0%** (clear leader, +16.2pp over Opus 4.5, ~6pp above GPT-5.2 Pro), **OSWorld 72.7%** (+6.4pp) — plus Agent Teams for parallel multi-agent work. Held below Opus 4.7 (90) by the **MCP Atlas regression to 59.5%** (below GPT-5.2's 60.6 and its own predecessor), a documented weak spot for agents coordinating dozens of tools, and by vendor-only reporting.
- **Reasoning: 87/100.** A genuine step-change in abstract reasoning — **ARC-AGI-2 68.8%** (near-double Opus 4.5, above GPT-5.2 Pro and Gemini 3 Pro) — plus leads on **HLE (40.0/53.1)**, best-in-class **Finance Agent 60.7%**, **GDPVal-AA 1606 Elo**, BigLaw Bench 90.2% and 2x science gains. Capped below Opus 4.7 (89) because **GPQA Diamond (91.3%) sits just under GPT-5.2 Pro/Gemini 3 Pro** and it is an earlier model than 4.7 (GPQA 94.2, HLE 46.9); all vendor-run.
- **Context window: 89/100.** The landmark feature — the **first Opus with a 1M-token window (beta)** and *verified-strong* long-context recall: **MRCR v2 93.0% at 256K and 76.0% at 1M** (vs Sonnet 4.5's 18.5% at 1M), 128K output and Context Compaction for long agents. Discounted below GPT-5.5's 93 because the 1M is **beta** and prompts over 200K incur a steep **$10/$37.50** pricing cliff.
- **Multimodal: 82/100.** Text + image only (no audio/video) with **MMMU Pro 73.9%/77.3%** — steady, incremental gains that **trail Gemini 3 Pro (81.0%) and GPT-5.2 (79.5/80.4)**. Vision is competent but not a differentiator; the model's strengths are agentic/reasoning, not multimodal.
- **Coding: 87/100.** Elite real-world software engineering — **SWE-bench Verified 80.8%** (above GPT-5.2's 80.0%, near-parity with Opus 4.5's 80.9%) and **Terminal-Bench 2.0 65.4%** (highest in Anthropic's lineup, narrowly beating GPT-5.2's Codex CLI 64.7%), with strong self-correction and massive-codebase reliability. Held below Opus 4.7 (89) because SWE-bench Verified **slightly regressed** from 4.5, Terminal-Bench trails 4.7 (69.4%), and no SWE-bench Pro figure was published here; by the later frontier (Fable 5 ~95% SWE-Verified) 80.8% is strong but not top.
- **Cost efficiency: 60/100.** Premium flagship pricing at **$5/$25** (unchanged from 4.5) with a **$10/$37.50** cliff above 200K tokens; Effort Tuning and Context Compaction help control spend, but **Agent Teams materially increase token cost**. Reasonable capability-per-dollar for a flagship, but far above the open-weight value models. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 86/100.** Mean of Tool 87 + Reasoning 87 + Context 89 + Multimodal 82 + Coding 87 = 86.4 → 86. Best fit: **long-horizon agentic engineering and knowledge work** — multi-file refactors in massive codebases, research/finance/legal agents, computer-use automation and (with Agent Teams) parallel specialist swarms, where the 1M context and strong self-correction matter most; watch the MCP Atlas regression if you coordinate very large tool catalogs, and expect premium pricing. Independent read: my 86 sits **below the queue's curated 88.1** (discounting vendor-only margins) and **just below Opus 4.7 (88)**, consistent with 4.7's later gains on SWE-bench Verified, Terminal-Bench, MCP Atlas, GPQA and HLE — while 4.6 still leads 4.7 on BrowseComp and long-context MRCR.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Vellum's "Claude Opus 4.6 vs 4.5 Benchmarks (Explained)," 2026-02-05; ClaudeWorld's "Claude Opus 4.6: Agent Teams, 1M Context & Effort Tuning," 2026-02-06; both reproducing Anthropic's launch evaluation table and API/pricing details). All capability figures are Anthropic vendor-run (including the rival comparison columns) and are treated as an upper bound, discounted against neutral harnesses; the corroborated MCP Atlas regression is reflected in the Tool-use score. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
