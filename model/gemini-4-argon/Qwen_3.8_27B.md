# Gemini 4 Argon — findings by Qwen 3.8 27B

- Source: Google/Google DeepMind (`gemini-4-argon`; Gemini API, pending general availability)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's new frontier model and the first of the Gemini 4 generation (announced 2026-09-30): built to sustain deep reasoning across complex, long-horizon workflows in real-world software engineering, enterprise knowledge work (legal, finance), and defensive cybersecurity, with an industry-leading 1M-token output limit (up from 64K).
- **Provider / access:** Google (1 provider per AA as of 2026-10-01). Not generally available: rolling out to trusted cyber defenders via the DeepMind **Fairwind Program** (released to them without cyber guardrails), with the US government's voluntary pre-release model-access process in flight; public release planned for "paid API customers and Google AI Ultra subscribers" first. No public benchmark traffic on AA yet (speed N/A).
- **Release / knowledge:** Announced/released 2026-09-30 (Google Keyword post, Koray Kavukcuoglu, SVP DeepMind); knowledge cutoff not disclosed in the announcement.
- **IDs:** `gemini-4-argon` (Gemini API; "High" reasoning variant tracked by AA; a non-reasoning variant may exist).
- **Context window:** 1M tokens context; **1M max output tokens** (industry-leading, up from 64K) — Google announcement + AA.
- **Modalities:** Text + image in, text out (AA). Video understanding demonstrated (LVBench 91.7% SOTA on long video; "identify details from long videos, take action based on a series of documents"). Reasoning: yes (High effort default on AA). Tool calls/agentic: yes (long-horizon agent workflows; AutomationBench, DeepSWE, Vals agent evals).
- **Pricing (announced, as of 2026-09-30):** Introductory $2.00 in / $10.00 out per 1M, cached input 95% off (~$0.10); after the intro period $4.00 in / $20.00 out (Google footnote 1). AA: blended $1.47/1M, $1.99 per Intelligence Index task (#77/223); The Decoder notes Argon burns >2× the tokens per task vs GPT-6 Astra, so per-task spend runs well above list price suggests.
- **Architecture:** Proprietary; parameter count undisclosed. Sibling in the cyber line: Gemini 3.8 Flash Cyber (CWE-bench v0 frontier), which Argon outperforms on vulnerability discovery (Google internal 20-language benchmark; Wiz internal black-box pentest benchmark).

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **77.9% — state of the art** (real-world long-horizon software engineering; Google announcement 2026-09-30)
- AutomationBench (Zapier, end-to-end business-function execution): **#1 with 51.3%** (Google announcement)
- Vals Index (economic impact: finance/coding/legal/tax, GDP-weighted): **leading model** (Google announcement; vals.ai)
- Vals Finance Agent v2 (multi-step financial research): leading performance (Google announcement)
- Harvey Legal Agent Benchmark (legal research/drafting): leading performance (Google announcement)
- Terminal-Bench Hard / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found in this pass

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4.3.2, independent): **53** — #8 of 223, "well above average" (median 26) (AA fetched 2026-10-01, "High" variant)
- The Decoder independent assessment (2026-09-30): **matches GPT-6 Astra, behind Claude Opus 5.5** in independent testing
- GPQA Diamond / HLE / CritPt / AA-Omniscience (individual values): no verified public score found in this pass (embedded in AA's Index 53)
- Internal Google results (context, not public benchmarks): beat a published quantum-algorithm baseline by 40%; identified memory optimizations freeing 300+ TiB fleet-wide; libgav1 SIMD rewrite 2.7× faster than the Rust port

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found in this pass (vendor's coding SOTA claim is carried by DeepSWE v1.1 above)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found in this pass
- DeepSWE v1.1: 77.9% SOTA (above); Vals coding sector: leading (above); internal large-scale migrations: 800K+ line C/C++→Rust efforts, re2/libgav1/Fuchsia Zircon (Google internal, audited)

Multimodal / video:

- LVBench (long video understanding): **91.7% — state of the art** (Google announcement)
- MMMU-Pro / image evals: no verified public score found in this pass
- Image input supported (AA); professional chart analysis and multi-document action described qualitatively

Long context / security (supplementary):

- 1M context + 1M output (above); no MRCR at 512K+ published in this pass
- CWE-bench v1 (vulnerability remediation): **68% — tied for first place** (Google announcement; builds on 3.8 Flash Cyber's v0 frontier)
- Gray Swan Indirect Prompt Injection benchmark: leading robustness (Google announcement)

### Normalized scores (1–100)

- **Tool use: 82/100.** SOTA agentic long-horizon execution: DeepSWE v1.1 77.9%, AutomationBench #1 (51.3%), Vals Index and Harvey leading — genuinely frontier agentic capability. Capped below the top by >2× per-task token burn vs GPT-6 Astra (The Decoder) and no public TB-Hard/Tau3/GDPval figures to confirm the multi-turn tool loop.
- **Reasoning: 82/100.** AA Index 53 (top-8 of 223, median 26) is solidly frontier; independent testing (The Decoder) places it level with GPT-6 Astra and behind Claude Opus 5.5; the 1M-output "deep reasoning" positioning and internal quantum/memory results support a top-tier long-horizon reasoner, one notch under the site's current #1.
- **Context window: 100/100.** 1M context plus an industry-leading 1M *output* limit (5× the previous 64K) — the largest single-trajectory window on this site; no retrieval benchmark yet disputes the headroom.
- **Multimodal: 88/100.** Text + image input with SOTA long-video understanding (LVBench 91.7%) and strong multi-document/chart claims — the strongest Gemini of this era on visual knowledge work, but not omni (no audio I/O in the tracked spec), so below the 95+ omni band.
- **Coding: 85/100.** DeepSWE v1.1 77.9% SOTA plus Vals coding leadership and credible internal migration results (2.7× libgav1, 800K-line Rust moves) make it a frontier coding model; held out of the 90s until SWE-bench Verified/HLE-class public numbers land and the Opus-5.5 gap is closed.
- **Cost efficiency: 90/100.** Intro $2/$10 with ~95% cache discount matches standard 2026 frontier pricing (blended $1.47/1M), but post-intro it doubles to $4/$20 and the >2× per-task token verbosity makes real per-task cost the weak spot among frontier peers.
- **Overall Score: 87.4/100.** Mean of (82 + 82 + 100 + 88 + 85)/5 = 87.4. Best fit: the new default for long-horizon software engineering, deep research/drafting in legal-finance, and defensive cyber work once out of the Fairwind gate — expect it to sit at (or above) GPT-6 Astra and just under Claude Opus 5.5 until public re-benchmarks.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Google Keyword announcement "Gemini 4 Argon: our next era of frontier intelligence", 2026-09-30 — specs, pricing incl. post-intro footnote, DeepSWE v1.1 77.9% SOTA, AutomationBench #1 51.3%, Vals Index/Harvey/Vals Finance leading, LVBench 91.7% SOTA, CWE-bench v1 68% tie-first, Fairwind rollout, internal migration/quantum/memory results; artificialanalysis.ai/models/gemini-4-argon fetched 2026-10-01 — Intelligence Index 53 #8/223, $2/$10, 95% cache discount, 1M context, text+image in, 1 provider; the-decoder.com 2026-09-30 independent comparison vs GPT-6 Astra / Claude Opus 5.5; arstechnica.com, techcrunch.com, cnbc.com, 9to5google.com, businessinsider.com, marktechpost.com coverage of the 2026-09-30 announcement); scores are normalized 1–100 interpretations — most capability numbers are vendor-published at launch (charts in the announcement), so treat as provisional until public re-benchmarks; no official vendor scores were copied beyond the cited ones.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
