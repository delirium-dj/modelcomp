# Gemini 4 Argon — findings by GPT 6 Sol

- Source: Google DeepMind (Gemini 4 Argon, restricted rollout)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier long-horizon software-engineering, professional-work and defensive-security model. At the time of research it is a restricted preview for trusted testers and cyber defenders, not a generally available Zen SKU.
- **Provider / access:** [Google's September 30 announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) describes Fairwind/early-tester rollout and later paid API access. No verified public `opencode/gemini-4-argon` route, exact API model string, or Chat Completions/Responses protocol found; treat the repository's route label as unconfirmed rather than assuming it is callable.
- **Release / knowledge:** Announced September 30, 2026, restricted rollout; knowledge cutoff not published ([Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)).
- **IDs:** Public product name `Gemini 4 Argon`; exact production API identifier not verified. The independent [Vals evaluation](https://www.vals.ai/models/google_gemini-4-argon) calls its tested model `Gemini 4 Argon`.
- **Context window:** 1M tokens ([Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), [Vals](https://www.vals.ai/models/google_gemini-4-argon)). Google advertises up to 1M *output* in a single trajectory; Vals' actual evaluation configuration used **262,144 max output**. Do not silently equate preview capability with the evaluated/public endpoint limit.
- **Modalities:** Google demonstrates chart/document and long-video understanding ([LVBench result in its announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)); [Vals](https://www.vals.ai/models/google_gemini-4-argon) lists text/image/video/file input, text output; [Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon) lists text/image input only for its evaluated route. Audio input and non-text output are unverified for this restricted model. Tool use and extended reasoning supported in evaluated agent harnesses; structured JSON API support unconfirmed.
- **Pricing (as of 2026-10-12):** Google's *announced introductory* $2 input / $10 output / $0.10 cached input per 1M, then **$4/$20** after the introductory period ([Google pricing and footnote](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)); [Vals](https://www.vals.ai/models/google_gemini-4-argon) lists $4/$20 for its evaluated run. No verified Free ID or generally available purchase path.
- **Architecture:** Proprietary, no published parameter count ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon)).

### Raw benchmarks found

Triangulated [Google's release](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), independently measured [Vals](https://www.vals.ai/models/google_gemini-4-argon), [Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon), [Collinear CWE-bench](https://cwe-bench.com/) and [Proximal FrontierSWE](https://www.frontierswe.com/). [BenchLM](https://benchlm.ai/models/gemini-4-argon) indexes additional cited rows, but is not a new evaluation itself.

Agent / tool use:

- Terminal-Bench 4.0 **57.58% ±2.31** (Vals, high reasoning, #6/47 at page load); [BenchLM citing AA](https://benchlm.ai/models/gemini-4-argon) records **57.1%** from a separate AA harness. Not a Terminal-Bench 2.1 result.
- [Vals Index **68.90% ±0.97**](https://www.vals.ai/models/google_gemini-4-argon) (#1/47 on displayed page), Finance Agent v2 **65.40%** (#1/78), Code Migration **68.17%** (#2/77), SRE Bench **44.27%** (#3/33); Vals also finds CUA-bench **4.83%** (#7/8), an important counterexample to unrestricted computer-use claims.
- [Google AutomationBench **51.3%**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) vs [AA AutomationBench-AA **77.5%**](https://benchlm.ai/models/gemini-4-argon): separate harnesses. [AA GDPval-AA **1624 Elo**](https://benchlm.ai/models/gemini-4-argon) under its current evaluation.
- [Collinear CWE-bench v1 **68% deterministic pass@1**, 62% judge-panel pass@1](https://cwe-bench.com/) across 120 held-out audit/patch tasks, Argon run in Antigravity; ties #1 on the programmatic result. This is a security-agent test, not model-only accuracy.
- Tau3-Banking / Claw-Eval for this restricted ID: no verified public score found.

Reasoning / knowledge:

- [AA Index v4.3.2 **53**](https://artificialanalysis.ai/models/gemini-4-argon), [AA-HLE **57.1%**, CritPt **27.1%**, AA-LCR **79.7%**](https://benchlm.ai/models/gemini-4-argon); note AA's 53 is a methodology-specific index, not the normalized Overall here.
- [Vals ProofBench v1.1 **99.00%**](https://www.vals.ai/models/google_gemini-4-argon) (#6/50), MysteryMechanism **45.49%** (#6/27), Vals RSI Index **30.55%** (#4/24); Google reports LABBench2 **88.8%** ([linked evidence index](https://benchlm.ai/models/gemini-4-argon)).

Coding:

- [Google DeepSWE v1.1 **77.9%**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/); [Proximal FrontierSWE v2 **55.0% ±9.9**](https://www.frontierswe.com/) (34 very long tasks, five trials each, #3 on displayed leaderboard).
- [Vals Vibe Code Bench v1.1 **91.91%**](https://www.vals.ai/models/google_gemini-4-argon) (#2/112); [AA-SciCode **61.8%**](https://benchlm.ai/models/gemini-4-argon); [CWE-bench v1 68%](https://cwe-bench.com/) strengthens real-patch evidence.
- SWE-bench Verified / LiveCodeBench exact restricted Argon run: no verified public score found in the consulted primary leaderboards.

Long context / multimodal:

- [GraphWalks BFS **99.7% at 128K**, **84.2% at 256K–1M**](https://benchlm.ai/models/gemini-4-argon) (Google methodology cited there; these are different input lengths); AA-LCR **79.7%** independently indexed. No >98% near-1M retrieval result.
- [Google LVBench long-video **91.7%**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) and Chartography without tools **71.6%** ([linked evidence index](https://benchlm.ai/models/gemini-4-argon)); visual performance is strong, but availability of video on an eventual public endpoint is still unconfirmed.

### Normalized scores (1–100)

- **Tool use: 92/100.** Vals Index 68.90%, TB4 57.58% and CWE-bench 68% are substantial agent evidence; CUA-bench 4.83% and restricted harness access cap generalization.
- **Reasoning: 94/100.** AA Index 53, HLE 57.1% and strong Vals/ProofBench results support frontier reasoning; CritPt 27.1% and long-context reasoning 79.7% leave room.
- **Context window: 93/100.** The 1M window and high output headroom merit a top band, but 84.2% GraphWalks at 256K–1M and the 262K Vals output setting keep it below the 98% retrieval ceiling.
- **Multimodal: 82/100.** LVBench 91.7% supports video understanding and Vals lists image/video/files, but AA's measured route lists only text/image; no audio or non-text output verified.
- **Coding: 96/100.** DeepSWE 77.9%, Vibe Code 91.91%, FrontierSWE 55.0% and independent security patches are excellent; hard extended tasks still fail frequently.
- **Cost efficiency: 64/100.** $2/$10 is introductory; $4/$20 thereafter and costly extended Vals tasks make the long-run value less certain. No free public route established.
- **Overall Score: 91/100.** (92 + 94 + 93 + 82 + 96) / 5 = 91.4, half-up 91; compelling for vetted long-horizon coding and defensive audits when preview access exists.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh comparison of Google announcement, Vals and AA independent evaluations, Collinear and Proximal benchmark leaderboards, and BenchLM's linked source index; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
