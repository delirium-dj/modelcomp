# GPT-5.5 Pro — findings by Kimi K3

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's highest-accuracy Pro tier of the GPT-5.5 family (announced **2026-04-23**, API from 2026-04-24) for the hardest research, business, legal, and data-science questions. Third-party composites diverge widely (BenchLeader 65.6 #40, RankLLMs 45.5, LM Market Cap best-OpenAI 93/coding #11, BenchLM 72.82 #13 of 889) because Pro-specific benchmark coverage stays sparse (~9 of 625 tracked rows have evidence).
- **Provider / access:** ChatGPT (Pro, Business, Enterprise); OpenAI API `gpt-5.5-pro` (Responses + Chat Completions); OpenRouter; OrcaRouter (zero markup).
- **Release / knowledge:** Announced 2026-04-23; API availability 2026-04-24. Knowledge cutoff not separately published.
- **IDs:** `openai/gpt-5.5-pro`. No Free ID on OpenCode Zen.
- **Context window:** 1,050,000 tokens total; max output **128K verified** (openrouter.ai — first pass lacked it). Family MRCR: see below.
- **Modalities:** Text + image in; text out. Reasoning efforts through xhigh; full Codex/tooling stack (tool search, apply_patch/shell, computer use) via the API.
- **Pricing (as of 2026-10-09):** $30/$180 per MTok — OpenAI's most expensive current tier (benchlm.ai API-pricing registry: 300x spread vs GPT-6 Luna $0.10 in). **No cached-input discount** and **+10% data-residency uplift** (developers.openai.com model docs — new this pass). Batch/Flex 50%; Priority 2.5x.
- **Architecture:** Proprietary; co-designed/trained/served on NVIDIA GB200/GB300 NVL72; params undisclosed. GPT-5.5 overall is Preparedness-Framework High for bio/chem + cyber (Trusted Access for Cyber).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI launch post; the only Pro-specific agentic row tracked)
- Family-level (GPT-5.5, no Pro breakouts): Terminal-Bench 2.0 82.7%, OSWorld-Verified 78.7%, Toolathlon 55.6%, MCP Atlas 75.3%, Tau2-bench Telecom 98.0%
- Claw-Eval / GDPval-AA (Elo): no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **43.1%** no tools / **57.2%** with tools (OpenAI launch post)
- FrontierMath: legacy 52.4%; v2 Tiers 1–3 **51.0%** (Epoch AI leaderboard — CONFLICT: OpenAI's table claims 52.4% for the same v2 tiers; both kept), Tier 4 **39.6%** (Epoch AI verified, matches OpenAI)
- ARC-AGI-1: **95.0%**; ARC-AGI-2: **84.2%** (ARC Prize official leaderboard — new this pass)
- CritPt: **30.6%** (artificialanalysis.ai — new this pass)
- GeneBench: **33.2%**; internal IB-modeling 88.6%; GDPval wins-or-ties 82.3% (OpenAI)
- GPQA Diamond: no Pro-specific figure (family GPT-5.5: 93.6%; GPT-5.4 Pro: 94.4%)
- BenchLM overall: **72.82/100, #13 of 889** (benchlm.ai, 2026-10-09)

Coding:

- No Pro-specific SWE numbers published; family-level: SWE-Bench Pro 58.6% (public; OpenAI footnotes third-party memorization concerns), Terminal-Bench 2.0 82.7%, Expert-SWE (internal) 73.1%
- RankLLMs cross-suite coding composite for Pro: SWE-bench-weighted overall 45.5/100 (rankllms.com — divergent harness; not used for scoring, flagged for conflict transparency)
- LM Market Cap coding category: **93/100 composite, #11** (lmmarketcap.com — family-weighted)
- CyberGym: family-level 81.8%

Long context:

- Family-level: MRCRv2 8-needle 87.5% @128–256K, 81.5% @256–512K, 74.0% @512K–1M; GraphWalks BFS 1M f1 45.4%. Pro-specific long-context numbers not published.

### Normalized scores (1–100)

- **Tool use: 94/100.** BrowseComp 90.1% SOTA at the Pro tier plus the family's 98.0% Tau2-Telecom / 75.3% MCP Atlas / 78.7% OSWorld stack; capped only by thin Pro-specific tool-eval breakouts.
- **Reasoning: 95/100.** HLE 57.2% tooled, FrontierMath v2 T4 39.6% (Epoch-verified), ARC-AGI-2 84.2% (ARC-verified), CritPt 30.6%; family GPQA 93.6%. At/beyond frontier reference lines; capped only by sparse Pro-specific coverage.
- **Context window: 93/100.** 1.05M window / 128K output now verified, family MRCRv2 74.0% even at 512K–1M; short of the ≥98% @512K bar for a perfect score.
- **Multimodal: 82/100.** Image input with family MMMU-Pro 83.2% (tools) and computer-use GUI/document understanding; no audio rows, text-only output keep it below the 90+ band.
- **Coding: 91/100.** Pro tier of the family holding TB 2.0 82.7% and SWE-Bench Pro 58.6% (with OpenAI's memorization caveat noted); capped by absent Pro-specific coding rows.
- **Cost efficiency: 18/100.** $30/$180 verified, no cache discount, +10% residency uplift; half-rate Batch/Flex only partially offsets. OpenAI's priciest current tier.
- **Overall Score: 91/100.** Half-up mean of the five quality dims: (94+95+93+82+91)/5 = 91.0 → 91 (unchanged). Best fit: the very hardest research/analysis/agentic workloads where accuracy and persistence justify Pro-tier pricing; GPT-5.5 non-Pro covers the same strengths far cheaper.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 4 independent sources (OpenAI launch post + developers.openai.com model docs, benchlm.ai scorecard + OpenAI API-pricing registry aggregating ARC Prize / Epoch AI / Artificial Analysis, openrouter.ai + orcarouter.ai listings, benchleader/rankllms/lmmarketcap composite cross-check). Conflicts flagged: FrontierMath v2 T1–3 52.4% (OpenAI) vs 51.0% (Epoch); wildly divergent third-party composites due to sparse Pro coverage. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
