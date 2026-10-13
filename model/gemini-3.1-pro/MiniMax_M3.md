# Gemini 3.1 Pro — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Google DeepMind / Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's upgraded Gemini 3 Pro flagship (preview, released 2026-02-19). Massively multimodal (text, image, audio, video, PDF in), reasoning-optimized for novel logic (ARC-AGI-2 77.1% — front-of-pack), and PhD-level knowledge (GPQA Diamond 94.3%). Top use case: scientific research workflows (paper synthesis / hypothesis generation) + multimodal agentic pipelines when breadth of input modality matters more than GDPval polish.
- **Provider / access:** `google/gemini-3.1-pro` (Gemini API / Google AI Studio / Vertex AI / Gemini CLI / Antigravity / Android Studio — all in preview 2026-02-19); consumer access via Gemini app (Pro/Ultra plans) and NotebookLM (Pro/Ultra). Zen free tier confirmed by the folder's `freeTierNote`.
- **Release / knowledge:** Released 2026-02-19 (Google blog `https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/`). Knowledge cutoff early-2026 per Google.
- **IDs:** `google/gemini-3.1-pro` (canonical, reasoning-on); `gemini-3-1-pro` (API slug). Free ID on Zen: yes.
- **Context window:** Per `model/gemini-3.1-pro/meta.json`: **2M / 64K out**. Industry's first 2M-tier context at this launch; some external reproductions report 1M — folder's meta is the authoritative project value. Long-context handling is core to Google's positioning.
- **Modalities:** Text, image, audio, video, PDF **in**; **text out** (folder meta.json + DeepMind model card). Reasoning: yes, with adaptive thinking and a paired Deep Think variant (released one week prior). Tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** Per open-source reporting (klu.ai / chatlyai / llm-stats blog), Google introduced tiered pricing for 3.1 Pro — **paid tier** ≅ $2 / $12 per 1M input/output (Macaron FAQ cites $2 vs $15 per 1M input vs Claude Opus 4.6 — 7.5× cheaper). Free tier: Google AI Studio + Zen. Cache discount exists (Google standard rate; numeric confirmation varies across reproductions).
- **Architecture:** Proprietary. Natively multimodal encoder. Same foundational backbone as the Gemini 3 series with upgraded core intelligence; Google cites "more efficient thinking: extracting more insight per compute token" as the lever that drove ARC-AGI-2 from 31.1% (3 Pro) to 77.1%.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%** (Leucopsis / Medium reproduction). GPT-5.3-Codex 77.3% on the same harness — Gemini **8.8 pts behind** the Codex leader for terminal-heavy agentic tasks.
- LiveCodeBench Pro Elo: **2,887** (Vertu review). Beats GPT-5.2 at 2,393 by ~494 Elo — strong on competitive-programming tasks in isolation.
- APEX-Agents: leading per Macaron benchmark deep-dive (specific score not in my sampled sources).
- AA-Briefcase / GDPval-AA v2.1 / AutomationBench-AA / Terminal-Bench 4.0 / SciCode / HLE / GDP.pdf / CritPt / AA-Omniscience / AA-LCR v1.1: covered in AA Intelligence Index.
- Artificial Analysis Intelligence Index (Feb 2026 vintage): **57** at launch (Attainment Labs reproduction). **By August 2026, AA Index re-scored this preview as 48** (Ampere.sh reproduction vs Grok 4.6 High's 61) — index dropped sharply as the frontier cohort lapped it.

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (Google verified; macaron + ampere reproduction). **#1 at release**: 2.5× the 31.1% Gemini 3 Pro scored, 8.3 pts above Claude Opus 4.6 (68.8%), 24.2 pts above GPT-5.3-Codex (52.9%). Two months later, Opus 5.5's launch table lifted ARC-AGI-2 lane; this score remained the Pro flagship's anchor.
- GPQA Diamond: **94.3%** (Google model card). Beats Claude Opus 4.6 (91.3%) and GPT-5.2 (92.4%). 
- Humanity's Last Exam (with tools): Claude (Opus 4.6) leads at launch; Gemini 3.1 Pro not in Google's headline HLE figures per the public Macaron breakdown (kept quiet).
- AA Intelligence Index Feb 2026: **57** (then-1st-tier); Aug 2026 vintage: **48** (mid-frontier, behind Grok 4.6 High 61).
- llm-stats composite for 3.1 Pro (raw numbers not in sampled sources).

Coding:

- SWE-Bench Verified: **80.6%** (Google). Effectively tied with Claude Opus 4.6's 80.8% (0.2 pp delta).
- LiveCodeBench Pro Elo: **2,887** (above).
- Terminal-Bench 2.0: 68.5% (above).
- FrontierCode 1.1 / FrontierSWE v2 / Terminal-Bench-Science 0.1 / CWE-bench v1: covered in AA Index v4.3.2 component evaluations; per-eval numbers not in the sources I sampled.

Long context:

- 2M / 64K (per meta.json); no MRCR or GraphWalks exact numbers found in sampled sources for this vintage.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 68.5%, LiveCodeBench Pro Elo 2,887 (#1 among non-Codex), APEX-Agents leading per Macaron reproduction, SWE-bench 80.6%. Cap = 8.8 pts behind GPT-5.3-Codex on TB 2.0; AA Index 48 by August 2026 (mid-frontier); GDPval-AA Elo 1317 (316 pts behind Claude Sonnet 4.6 Thinking Max) — a "Loses to Claude on real-world expert knowledge work" shape per Macaron's reading.
- **Reasoning: 90/100.** ARC-AGI-2 **77.1%** (verified #1 at release), GPQA Diamond **94.3%** (verified #1 at release), AA Index 57 → 48 (frontier to mid-frontier shift in 6 months). Cap = AA Index dropped 9 points after Opus 5.5 + Grok 4.6 + GPT-6 cohort arrived; HLE (with tools) not published at launch.
- **Context window: 95/100.** Project meta records **2M / 64K out** — first 2M-tier window on the public benchmarks tier, though some external reproductions still cite 1M. Includes AA-LCR / MLCR-AA in Index component evaluations. Kept off 100 because Google did not publish a clean 2M-set MRCR / GraphWalks number in the launch reproduction I sampled.
- **Multimodal: 95/100.** Text, image, audio, video, PDF in; text out (Google DeepMind model card + meta.json). Drives the demos: code-based animation SVGs, aerospace telemetry, 3D starling murmuration hand-tracking, novel portfolio designs. Per methodology (text + image + audio + video + PDF in coverage) → 95.
- **Coding: 84/100.** SWE-bench Verified 80.6% (effectively tied with Opus 4.6); LiveCodeBench Pro 2,887 Elo (behind GPT-5.3-Codex on terminal tasks but ahead on competitive-algorithm Elo); TB 2.0 68.5% (8.8 pts behind Codex). Cap = Terminal-Bench 2.0 lags Codex by 8.8 pts; no public FrontierSWE v2 / FrontierCode 1.1 / CWE-bench v1 split in sampled sources.
- **Cost efficiency: 80/100.** $2 vs Opus 4.6's $15 = **7.5× cheaper per input token** (Macaron FAQ). Free tier on AI Studio + Zen. Reasoning-token billing TBD in 3.1 Pro generation. Cap = paid-tier exact output price varies across reproductions ($12 in some reports); standard cache discount not as deep as later Argon / Opus 5.5 (95%): treat as 80, not 90+.
- **Overall Score: 90/100.** Mean of `(86 + 90 + 95 + 95 + 84) / 5 = 90.0` → half-up **90**. Best fit: scientific research / paper-synthesis workflows (GPQA Diamond 94.3%, ARC-AGI-2 77.1%), PDF + video + audio ingestion pipelines (folder modality set), and cost-sensitive production agents where 2M context amortises longer doc workflows. Don't lead with this if your bottleneck is **GDPval-style expert knowledge-work polish** — Claude Sonnet 4.6 / Opus 4.6 hold a 316-point Elo lead on real-world expert Elo per Macaron. Also watch out: the model's AA Intelligence Index dropped 9 points (57 → 48) between Feb and Aug 2026 as newer models arrived.

---

## Signature

- Provided by: **MiniMax M3 (google/gemini-3.1-pro)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from the Google launch blog & DeepMind model card, Macaron's plain-English benchmark breakdown (cross-checked against Attainment Labs Feb 2026 report, Ampere.sh Aug 2026 update), klu.ai HLE leaderboard note, llm-stats blog, Macaron FAQ pricing pointer, and Wikipedia/Medium/Leucopsis reproductions for Terminal-Bench 2.0. Per-benchmark footnotes (harness, vintage, vs-Claude Δ) captured in-line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
